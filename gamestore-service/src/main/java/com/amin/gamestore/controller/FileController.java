package com.amin.gamestore.controller;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.UUID;

@RestController
public class FileController {

    public void uploadFile(@RequestBody MultipartFile file){
        String name = saveFile(file);
    }

    @GetMapping("/images/{name}")
    public void getImage(@PathVariable String name, HttpServletResponse response, UriComponentsBuilder ucb) {
        File file = new File("C:\\uploads\\" + name);
        if (!file.exists()) {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            return;
        }
        try (FileInputStream inputStream = new FileInputStream(file)) {
            String mimeType = "application/octet-stream";
            response.setContentType(mimeType);
            response.setContentLength((int) file.length());
            response.setHeader("Content-Disposition", "attachment; filename=\"" + file.getName() + "\"");
            OutputStream outputStream = response.getOutputStream();
            byte[] buffer = new byte[4096];
            int bytesRead = -1;
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }
            outputStream.flush();
        } catch (IOException ex) {
            ex.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
    }

    public static String saveFile(MultipartFile file) {
        if (file.isEmpty()) {
            System.out.println("File is empty. Please upload a valid file.");
            return null;
        }
        String fileName = file.getOriginalFilename();
        String uploadDir = "C:\\uploads\\";
        String fileExtension = "";
        if (fileName != null && fileName.contains(".")) {
            fileExtension = fileName.substring(fileName.lastIndexOf("."));
        }

        fileName = UUID.randomUUID().toString().replace("-", "") + fileExtension;
        try {
            File destinationFile = new File(uploadDir + fileName);
            file.transferTo(destinationFile);
            System.out.println("File saved successfully.");
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("Failed to save the file.");
        }
        return fileName;
    }
}

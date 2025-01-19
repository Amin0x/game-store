package com.amin.gamestore.dto;

import org.springframework.web.multipart.MultipartFile;

public class CategoryForm {

    private String name;
    private MultipartFile image;

    public CategoryForm() {
    }

    public CategoryForm(String name, MultipartFile file) {
        this.name = name;
        this.image = file;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public MultipartFile getImage() {
        return image;
    }

    public void setImage(MultipartFile image) {
        this.image = image;
    }
}

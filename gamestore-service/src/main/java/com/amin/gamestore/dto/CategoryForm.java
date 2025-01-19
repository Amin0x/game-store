package com.amin.gamestore.dto;

import org.springframework.web.multipart.MultipartFile;

public class CategoryDto {

    private String name;
    private MultipartFile image;

    public CategoryDto() {
    }

    public CategoryDto(String name, MultipartFile file) {
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

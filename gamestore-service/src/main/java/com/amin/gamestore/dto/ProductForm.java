package com.amin.gamestore.dto;

import org.springframework.web.multipart.MultipartFile;

public class ProductForm {
    private String name;
    private String nameAr;
    private String category;
    private String brand;
    private Double price;
    private Double pricePre;
    private MultipartFile imageUrl;

    public ProductForm() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public MultipartFile getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(MultipartFile imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getNameAr() {
        return nameAr;
    }

    public void setNameAr(String nameAr) {
        this.nameAr = nameAr;
    }

    public Double getPricePre() {
        return pricePre;
    }

    public void setPricePre(Double pricePre) {
        this.pricePre = pricePre;
    }
}

package com.amin.gamestore.controller;

import com.amin.gamestore.dto.CategoryForm;
import com.amin.gamestore.model.Category;
import com.amin.gamestore.repo.CategoryRepository;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/category")
    public List<Category> getCategories(
            @RequestParam(defaultValue = "") String brand,
            @RequestParam(defaultValue = "") String cat
            ) {

        System.out.println("brand ={brand}; cat = {cat}");
        if (brand.isEmpty() && cat.isEmpty())
            return categoryRepository.findAll();

        List<Category> categories = new ArrayList<>();
        if (!brand.isEmpty() && !cat.isEmpty())
            return categoryRepository.findByBrandAndName(brand, cat);


        if (cat.equalsIgnoreCase("cards"))
            return categoryRepository.findByName(cat);
        else if (cat.equalsIgnoreCase("psg")) {
            return categoryRepository.findByName(cat);
        } else if (cat.equalsIgnoreCase("itune")) {
            return categoryRepository.findByName(cat);
        } else {
            //error
        }

        return categories;
    }



    @PostMapping("/category")
    public Category createCategory(@ModelAttribute CategoryForm category) {
        Category category1 = new Category();
        category1.setName(category.getName());
        category1.setBrand(category1.getBrand());
        category1.setCreatedAt(LocalDateTime.now());
        category1.setUpdatedAt(LocalDateTime.now());
        String image = FileController.saveFile(category.getImage());
        category1.setImage(image);
        return categoryRepository.save(category1);
    }

    @PutMapping("/category/{id}")
    public Category updateCategory(@PathVariable Long id, @RequestBody Category category) {
        Category category1 = categoryRepository.findById(id).orElseThrow();
        category1.setName(category.getName());
        category1.setBrand(category.getBrand());
        category1.setUpdatedAt(LocalDateTime.now());
        return categoryRepository.save(category1);
    }

    private void getBrand(String brand) {
        if (brand.isEmpty())
            return;
    }


}

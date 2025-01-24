package com.amin.gamestore.controller;

import com.amin.gamestore.dto.CategoryForm;
import com.amin.gamestore.model.Category;
import com.amin.gamestore.repo.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/category/{id}")
    public Category getCategories(@PathVariable Long id){
        return  categoryRepository.findById(id).orElseThrow();
    }

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
    public Category updateCategory(@RequestBody Category category, @PathVariable Long id) {
        System.out.println("category is: " + category);
        System.out.println("category id is: " + id);
        Category category1 = categoryRepository.findById(id).orElseThrow();
        category1.setName(category.getName());
        category1.setBrand(category.getBrand());
        category1.setNameAr(category.getNameAr());
        category1.setUpdatedAt(LocalDateTime.now());
        return categoryRepository.save(category1);
    }

}

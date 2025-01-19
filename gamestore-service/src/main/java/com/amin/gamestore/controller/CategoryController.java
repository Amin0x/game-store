package com.amin.gamestore.controller;

import com.amin.gamestore.model.Category;
import com.amin.gamestore.repo.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/category")
    public List<Category> getCategories(){
        return categoryRepository.findAll();
    }

    @PostMapping("/category")
    public Category createCategory(@RequestBody Category category) {
        Category category1 = new Category();
        category1.setName(category.getName());
        return categoryRepository.save(category1);
    }

    @PutMapping("/category/{id}")
    public Category updateCategory(@PathVariable Long id, @RequestBody Category category) {
        Category category1 = categoryRepository.findById(id).orElseThrow();
        category1.setName(category.getName());
        return categoryRepository.save(category1);
    }

    private void getBrand(String brand){
        if (brand.isEmpty())
            return;
    }
}

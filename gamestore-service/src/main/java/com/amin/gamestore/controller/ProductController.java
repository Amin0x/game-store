package com.amin.gamestore.controller;

import com.amin.gamestore.model.Product;
import com.amin.gamestore.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/product")
    public Product create(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

}

package com.amin.gamestore.controller;

import com.amin.gamestore.dto.ProductForm;
import com.amin.gamestore.model.Product;
import com.amin.gamestore.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/products")
    public Product createProduct(@RequestBody ProductForm productForm) {
        Product product = new Product();
        product.setBrand(productForm.getBrand());
        product.setName(productForm.getName());
        product.setCategory(productForm.getCategory());
        product.setPrice(productForm.getPrice());
        product.setCreatedAt(new Date());
        product.setUpdatedAt(new Date());
        return productService.saveProduct(product);
    }

    @GetMapping("/products")
    public Iterable<Product> getProducts() {
        return productService.getProducts();
    }

    @GetMapping("/api/products/best-sales")
    public Iterable<Product> getBestSalesProducts() {
        return productService.getProducts();
    }

    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProduct(id).orElseThrow(()-> new RuntimeException("Resource not found"));
    }

    @PutMapping("/products/{id}")
    public void updateProduct(@ModelAttribute ProductForm productForm, @PathVariable Long id){
        Product product = productService.getProduct(id).orElseThrow();
        product.setBrand(productForm.getBrand());
        product.setName(productForm.getName());
        product.setCategory(productForm.getCategory());
        product.setPrice(productForm.getPrice());

        productService.saveProduct(product);
    }



}

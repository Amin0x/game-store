package com.amin.gamestore.service;

import com.amin.gamestore.model.Product;
import com.amin.gamestore.repo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product saveProduct(Product product) {
        if (product == null)
            throw new RuntimeException("product is null");

        return productRepository.save(product);
    }

    public Iterable<Product> getProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProduct(Long id) {
        if (id == null)
            throw new RuntimeException("id is null");

        return productRepository.findById(id);
    }
}

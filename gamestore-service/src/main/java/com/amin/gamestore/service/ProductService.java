package com.amin.gamestore.service;

import com.amin.gamestore.model.Product;
import com.amin.gamestore.repo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public Iterable<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        if(id == null) {
            return null;
        }
        return productRepository.findById(id).orElse(null);
    }
}

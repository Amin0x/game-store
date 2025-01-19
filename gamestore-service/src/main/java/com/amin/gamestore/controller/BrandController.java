package com.amin.gamestore.controller;

import com.amin.gamestore.model.Brand;
import com.amin.gamestore.repo.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BrandController {

    @Autowired
    private BrandRepository brandRepository;

    @PostMapping("/brands")
    public Brand createBrand(@RequestBody Brand brand){
        Brand brand1 = new Brand();
        brand1.setName(brand.getName());
        brand1.setNameAr(brand.getNameAr());
        return brandRepository.save(brand1);
    }

    @GetMapping("/brands")
    public List<Brand> getBrands(){
        return brandRepository.findAll();
    }
}

package com.amin.gamestore.repo;

import com.amin.gamestore.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    List<Category> findByBrandOrName(String b, String c);
    List<Category> findByBrand(String brand);
    List<Category> findByName(String name);
    List<Category> findByBrandAndName(String brand, String cat);
}

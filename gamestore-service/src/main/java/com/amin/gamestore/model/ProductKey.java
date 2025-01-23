package com.amin.gamestore.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ProductKey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
}

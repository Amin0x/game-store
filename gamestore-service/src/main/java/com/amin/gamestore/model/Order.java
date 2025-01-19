package com.amin.gamestore.model;

import jakarta.persistence.*;

@Entity
@Table(name = "torder")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}

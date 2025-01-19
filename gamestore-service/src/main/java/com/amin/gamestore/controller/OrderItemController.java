package com.amin.gamestore.controller;

import com.amin.gamestore.model.OrderItem;
import com.amin.gamestore.repo.OrderItemRepo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OrderItemController {

    private OrderItemRepo orderItemRepo;

    @GetMapping("/orders/items")
    public List<OrderItem> getItems(){
        return orderItemRepo.findByOrderId(1L);
    }
}

package com.amin.gamestore.service;

import com.amin.gamestore.model.Order;
import com.amin.gamestore.repo.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Optional<Order> getOrder(Long id){
        return orderRepository.findById(id);
    }
}

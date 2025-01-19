package com.amin.gamestore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amin.gamestore.repo.OrderItemRepo;
import com.amin.gamestore.model.OrderItem;
import java.util.List;
import java.util.Optional;

@Service
public class OrderItemService {

    @Autowired
    private OrderItemRepo orderItemRepo;

    public List<OrderItem> getAllOrderItems() {
        return orderItemRepo.findAll();
    }

    public Optional<OrderItem> getOrderItemById(Long id) {
        return orderItemRepo.findById(id);
    }

    public OrderItem saveOrderItem(OrderItem orderItem) {
        return orderItemRepo.save(orderItem);
    }

    public void deleteOrderItem(Long id) {
        orderItemRepo.deleteById(id);
    }
}

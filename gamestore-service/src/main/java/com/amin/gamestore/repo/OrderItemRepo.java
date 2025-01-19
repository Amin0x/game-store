package com.amin.gamestore.repo;

import com.amin.gamestore.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderItemRepo extends JpaRepository<Long, OrderItem> {
    List<OrderItem> findByOrderId(Long orderId);
}

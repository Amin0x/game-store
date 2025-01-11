package com.amin.gamestore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class ApiIntegration {
   
    @Autowired
    private RestTemplate restTemplate;
}
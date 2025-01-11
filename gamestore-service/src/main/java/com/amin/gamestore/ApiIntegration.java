package com.amin.gamestore;

import org.springframework.stereotype.Component;

@Component
public class ApiIntegration {
   
    @Autowired
    private RestTemplate restTemplate;
}
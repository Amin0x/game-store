package com.amin.gamestore.dto;

import java.util.List;

public record BrandDto(
        String name,
        List<String> images
) {
}

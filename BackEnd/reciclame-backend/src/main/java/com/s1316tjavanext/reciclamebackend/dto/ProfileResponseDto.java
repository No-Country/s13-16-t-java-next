package com.s1316tjavanext.reciclamebackend.dto;

import com.s1316tjavanext.reciclamebackend.entity.enums.Category;

import java.util.List;
import java.util.UUID;

/**
 * @author jdmon on 28/02/2024
 * @project reciclame-backend
 */
public record ProfileResponseDto(
        UUID id,
        String photoId,
        String bio,
        List<Category> categories,
        UserResponseDTO userResponseDTO
) {
}

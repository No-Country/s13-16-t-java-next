package com.s1316tjavanext.reciclamebackend.dto;

import java.util.UUID;

/**
 * @author jdmon on 28/02/2024
 * @project reciclame-backend
 */
public record ProfileResponseDto(
        UUID id,
//        String photoId
//        Lista Categorias
        String bio,
        UserResponseDTO userResponseDTO
) {
}

package com.s1316tjavanext.reciclamebackend.dto;



import java.util.Date;
import java.util.UUID;

public record UserResponseDTO(
        UUID userId,
        String name,
        String lastName,
        String email,
        String phone,
        String password,
        int location_id,
        Date birthdate,
        String photoId
) {
}

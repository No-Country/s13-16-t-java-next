package com.s1316tjavanext.reciclamebackend.dto;



import com.s1316tjavanext.reciclamebackend.entity.Location;

import java.util.Date;
import java.util.UUID;

public record UserResponseDTO(
        UUID userId,
        String name,
        String lastName,
        String email,
        String phone,
        String password,
        Location location,
        Date birthdate,
        UUID profileId
) {
}

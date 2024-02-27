package com.s1316tjavanext.reciclamebackend.dto;

import com.s1316tjavanext.reciclamebackend.entity.Location;
import com.s1316tjavanext.reciclamebackend.entity.Profile;
import com.s1316tjavanext.reciclamebackend.entity.Province;
import jakarta.persistence.*;

import java.util.Date;
import java.util.UUID;

public record UserResponseDTO(
        UUID userId,
        Profile perfil,
        String name,
        String lastName,
        String email,
        String phone,
        String password,
        int location_id,
        Date birthdate
) {
}

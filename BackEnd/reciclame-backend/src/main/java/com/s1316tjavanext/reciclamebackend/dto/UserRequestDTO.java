package com.s1316tjavanext.reciclamebackend.dto;

import java.util.Date;

public record UserRequestDTO(
        String name,
        String lastName,
        String email,
        String phone,
        String password,
        int location_id,
        Date birthdate
) {
}

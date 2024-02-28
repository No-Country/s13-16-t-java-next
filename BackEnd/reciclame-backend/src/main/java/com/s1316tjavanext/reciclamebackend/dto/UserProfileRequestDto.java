package com.s1316tjavanext.reciclamebackend.dto;

import java.util.Date;

/**
 * @author jdmon on 28/02/2024
 * @project reciclame-backend
 */
public record UserProfileRequestDto (
        String name,
        String lastName,
        String email,
        String phone,
        String password,
        int location_id,
        Date birthdate,
        // data profile
        String bio
) {
}

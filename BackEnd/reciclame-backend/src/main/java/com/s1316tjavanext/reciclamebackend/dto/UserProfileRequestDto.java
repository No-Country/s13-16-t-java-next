package com.s1316tjavanext.reciclamebackend.dto;

import com.s1316tjavanext.reciclamebackend.entity.enums.Category;

import java.util.Date;
import java.util.List;

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
        String bio,
        List<Category> categories
) {
}

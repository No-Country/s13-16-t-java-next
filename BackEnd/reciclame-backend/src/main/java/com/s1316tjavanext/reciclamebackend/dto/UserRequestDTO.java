package com.s1316tjavanext.reciclamebackend.dto;

import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.Length;

import java.util.Date;
import java.util.UUID;

public record UserRequestDTO(
        @NotBlank
        @Min(3)
        String name,
        @NotBlank
        String lastName,
        @NotBlank
        @Email
        String email,
        @NotBlank
        String phone,
        @NotBlank
        @Pattern(regexp = "^(?=.*[A-Z])(?=.*\\d)[a-zA-Z0-9.!@#$&*%_\\-=]+$")
        @Length(min = 8)
        String password,

        @Positive
        @Max(2410)
        int location_id,

        @NotNull
        Date birthdate
) {
}

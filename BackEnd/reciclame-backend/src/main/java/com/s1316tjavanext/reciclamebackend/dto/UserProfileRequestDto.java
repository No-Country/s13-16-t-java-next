package com.s1316tjavanext.reciclamebackend.dto;

import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

import static com.s1316tjavanext.reciclamebackend.util.Constants.*;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_PASSWORD;

/**
 * @author jdmon on 28/02/2024
 * @project reciclame-backend
 */
public record UserProfileRequestDto (
        @NotBlank(message = INVALID_NAME)
        @Length(min = 3, message = INVALID_LENGTH_NAME)
        String name,

        @NotBlank(message = INVALID_NAME)
        @Length(min = 3, message = INVALID_LENGTH_NAME)
        String lastName,

        @NotBlank(message = INVALID_EMAIL)
        @Email(message = INVALID_EMAIL)
        String email,

        @NotBlank(message = INVALID_PHONE_NUMBER)
        @Length(min = 9, max = 30, message = INVALID_LENGTH_PHONE_NUMBER)
        String phone,

        @NotBlank(message = INVALID_PASSWORD)
        @Pattern(regexp = "^(?=.*[A-Z])(?=.*\\d)[a-zA-Z0-9.!@#$&*%_\\-=]+$", message = INVALID_PASSWORD)
        @Length(min = 8, message = INVALID_PASSWORD)
        String password,

        @Positive
        @Max(2410)
        int location_id,

        @NotNull
        @DateTimeFormat(pattern = "yyyy-MM-dd")
        Date birthdate,
        // data profile
        String bio,
        @NotNull
        List<String> categories
) {
}

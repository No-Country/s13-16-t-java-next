package com.s1316tjavanext.reciclamebackend.dto;

import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.Length;

import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_BIRTHDAY;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_EMAIL;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_LENGTH_NAME;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_LENGTH_PHONE_NUMBER;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_LOCATION_ID;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_NAME;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_PASSWORD;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_PHONE_NUMBER;

import java.util.Date;

public record UserRequestDTO(
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

        @Positive(message = INVALID_LOCATION_ID)
        @Max(2410)
        int location_id,

        @NotNull(message = INVALID_BIRTHDAY)
        @Past(message = INVALID_BIRTHDAY)
        Date birthdate
) {
}

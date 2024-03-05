package com.s1316tjavanext.reciclamebackend.dto;

import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.Length;

import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_BIRTHDAY;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_EMAIL;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_LENGTH_NAME;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_LENGTH_PHONE_NUMBER;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_NAME;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_PASSWORD;
import static com.s1316tjavanext.reciclamebackend.util.Constants.INVALID_PHONE_NUMBER;

import java.util.Date;

public record UserRequestDTO(
        @NotBlank(message = INVALID_NAME)
        @Length(min = 3, message = INVALID_LENGTH_NAME)
//        @NotBlank
//        @Min(value =3 , message = "El nombre debe contener al menos 3 caracteres")
        String name,

        @NotBlank(message = INVALID_NAME)
        @Length(min = 3, message = INVALID_LENGTH_NAME)
//        @NotBlank(message = "Este es un campo obligatorio")
        String lastName,

        @NotBlank(message = INVALID_EMAIL)
        @Email(message = INVALID_EMAIL)
        String email,

        @NotBlank(message = INVALID_PHONE_NUMBER)
        @Length(min = 9, max = 30, message = INVALID_LENGTH_PHONE_NUMBER)
//        @NotBlank(message = "Este es un campo obligatorio")
        String phone,

        @NotBlank(message = INVALID_PASSWORD)
        @Pattern(regexp = "^(?=.*[A-Z])(?=.*\\d)[a-zA-Z0-9.!@#$&*%_\\-=]+$", message = INVALID_PASSWORD)
        @Length(min = 8, message = INVALID_PASSWORD)
//        @NotBlank
//        @Pattern(regexp = "^(?=.[A-Z])(?=.[a-z])(?=.\\d)(?=.[!@#$&%_\\-=])[a-zA-Z0-9.!@#$&%_\\-=]+$", message = "El password debe contener al menos una mayúscula, una minúscula, un numero y un carácter especial")
//        @Length(min = 8, message = "El password debe contener al menos 8 caracteres")
        String password,

        @Positive
        @Max(2410)
        int location_id,

        @NotNull
        Date birthdate
) {
}

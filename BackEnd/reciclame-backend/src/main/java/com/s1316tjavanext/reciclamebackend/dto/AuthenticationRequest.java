package com.s1316tjavanext.reciclamebackend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record AuthenticationRequest(
    @NotBlank(message = "")
    @Email(message = "")
    String email,

    @NotBlank(message = "")
    String password
) {
}

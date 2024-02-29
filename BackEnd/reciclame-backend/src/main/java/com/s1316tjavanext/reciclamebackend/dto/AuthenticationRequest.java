package com.s1316tjavanext.reciclamebackend.dto;

public record AuthenticationRequest(
    String email,
    String password
) {
}

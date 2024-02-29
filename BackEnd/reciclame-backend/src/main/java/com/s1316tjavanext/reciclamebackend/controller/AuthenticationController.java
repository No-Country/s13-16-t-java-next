package com.s1316tjavanext.reciclamebackend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.s1316tjavanext.reciclamebackend.dto.AuthenticationRequest;
import com.s1316tjavanext.reciclamebackend.dto.AuthenticationResponse;
import com.s1316tjavanext.reciclamebackend.dto.UserRequestDTO;
import com.s1316tjavanext.reciclamebackend.service.AuthenticationService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
public class AuthenticationController {
    
    private final AuthenticationService authenticationService;

    @PostMapping("/register") 
    public ResponseEntity<AuthenticationResponse> registerUser(@RequestBody UserRequestDTO request) {
        return ResponseEntity.ok().body(authenticationService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> loginUser(@RequestBody AuthenticationRequest request) {
        return new ResponseEntity<>(authenticationService.authenticate(request), HttpStatus.OK);
    }
}   
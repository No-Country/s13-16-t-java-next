package com.s1316tjavanext.reciclamebackend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.s1316tjavanext.reciclamebackend.dto.AuthenticationRequest;
import com.s1316tjavanext.reciclamebackend.dto.AuthenticationResponse;
import com.s1316tjavanext.reciclamebackend.dto.UserRequestDTO;
import com.s1316tjavanext.reciclamebackend.exception.DuplicateFieldException;
import com.s1316tjavanext.reciclamebackend.exception.EmailNotFoundException;
import com.s1316tjavanext.reciclamebackend.service.AuthenticationService;
import com.s1316tjavanext.reciclamebackend.service.UserService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
public class AuthenticationController {
    
    private final AuthenticationService authenticationService;

    private final UserService userService;

    @PostMapping("/register") 
    public ResponseEntity<?> registerUser(@RequestBody UserRequestDTO request) {
        try {
            return ResponseEntity.ok().body(userService.createUser(request));
        } catch (DuplicateFieldException exception) {
            Map<String, String> json = new HashMap<>();
            json.put("email", "email ya registrado");
            return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(json);
        }       
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody AuthenticationRequest request) {
        Map<String, String> json = new HashMap<>();
        try {
            AuthenticationResponse authenticationResponse = authenticationService.authenticate(request);
            return ResponseEntity.ok(authenticationResponse);
        } catch(BadCredentialsException exception) {
            json.put("credenciales incorrectas", "verifique su email y contraseña");
            return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(json);
        } catch(EmailNotFoundException exception) {
            json.put("email", "no encontrado, verifique su email");
            return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(json);
        }
    }
}
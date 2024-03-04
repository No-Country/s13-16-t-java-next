package com.s1316tjavanext.reciclamebackend.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.s1316tjavanext.reciclamebackend.dto.AuthenticationRequest;
import com.s1316tjavanext.reciclamebackend.dto.AuthenticationResponse;
import com.s1316tjavanext.reciclamebackend.entity.User;
import com.s1316tjavanext.reciclamebackend.exception.EmailNotFoundException;
import com.s1316tjavanext.reciclamebackend.repository.UserRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class AuthenticationService {
    
    private final UserRepository userRepository;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        User user = userRepository.findByEmail(request.email())
            .orElseThrow(() -> new EmailNotFoundException("Email not found"));

        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.email(),
                request.password()
            )
        );        

        String token = jwtService.generateToken(user);

        return new AuthenticationResponse(token);
    }
}
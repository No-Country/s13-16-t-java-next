package com.s1316tjavanext.reciclamebackend.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.s1316tjavanext.reciclamebackend.dto.AuthenticationRequest;
import com.s1316tjavanext.reciclamebackend.dto.AuthenticationResponse;
import com.s1316tjavanext.reciclamebackend.dto.UserRequestDTO;
import com.s1316tjavanext.reciclamebackend.dto.UserResponseDTO;
import com.s1316tjavanext.reciclamebackend.entity.Profile;
import com.s1316tjavanext.reciclamebackend.entity.Role;
import com.s1316tjavanext.reciclamebackend.entity.User;
import com.s1316tjavanext.reciclamebackend.exception.EmailNotFoundException;
import com.s1316tjavanext.reciclamebackend.mapper.UserMapper;
import com.s1316tjavanext.reciclamebackend.repository.ProfileRepository;
import com.s1316tjavanext.reciclamebackend.repository.UserRepository;

import ch.qos.logback.core.util.SystemInfo;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class AuthenticationService {
    
    private final UserRepository userRepository;

    private final ProfileRepository profileRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final UserMapper userMapper;

    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(UserRequestDTO request) {       
        User user = userMapper.userRequestDTOToUser(request);

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setDeleted(false);
        user.setRole(Role.USER);

        User userSaved = userRepository.save(user);
        Profile profileUser = new Profile();

        profileUser.setUser(userSaved); 
        profileRepository.save(profileUser);

        String token = jwtService.generateToken(userSaved);

        return new AuthenticationResponse(token);
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.email(),
                request.password()
            )
        );

        User user = userRepository.findByEmail(request.email())
            .orElseThrow(() -> new EmailNotFoundException("Email not found"));

        String token = jwtService.generateToken(user);

        return new AuthenticationResponse(token);

    }
}
package com.s1316tjavanext.reciclamebackend.service.impl;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.s1316tjavanext.reciclamebackend.exception.EmailNotFoundException;
import com.s1316tjavanext.reciclamebackend.repository.UserRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws EmailNotFoundException {
		 return userRepository.findByEmail(email)
            .orElseThrow(() -> new EmailNotFoundException("Email not found"));
	}
}
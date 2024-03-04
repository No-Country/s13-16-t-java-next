package com.s1316tjavanext.reciclamebackend.repository;

import com.s1316tjavanext.reciclamebackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    
    Optional<User> findByEmail(String email);
}
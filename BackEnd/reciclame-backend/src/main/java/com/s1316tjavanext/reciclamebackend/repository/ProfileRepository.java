package com.s1316tjavanext.reciclamebackend.repository;

import com.s1316tjavanext.reciclamebackend.entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProfileRepository extends JpaRepository<Profile, UUID> {
}

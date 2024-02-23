package com.s1316tjavanext.reciclamebackend.controller;

import com.s1316tjavanext.reciclamebackend.dto.UserCreateDTO;
import com.s1316tjavanext.reciclamebackend.entity.Profile;
import com.s1316tjavanext.reciclamebackend.mapper.ProfileMapper;
import com.s1316tjavanext.reciclamebackend.service.ProfileService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@AllArgsConstructor
@RestController
@RequestMapping("/profile")
public class ProfileController {

    private final ProfileService profileService;
    private final ProfileMapper profileMapper;

    @GetMapping("/{profileId}")
    public ResponseEntity<Profile> getProfile(@PathVariable UUID profileId) {
        return ResponseEntity.ok(profileService.getProfile(profileId));
    }

    @PostMapping
    @Operation(summary = "Register a new user", description = "Register a new user in the system")
    public ResponseEntity<Profile> saveProfile(@RequestBody UserCreateDTO userCreateDTO) {
        Profile profile = profileMapper.userCreateDTOToProfile(userCreateDTO);
        profile.setId(UUID.randomUUID());
        return ResponseEntity.ok(profile);
    }

    @PutMapping("/{profileId}")
    public ResponseEntity<Profile> updateProfile(@PathVariable UUID profileId,@RequestBody Profile profile) {
        return ResponseEntity.ok(profileService.updateProfile(profileId, profile));
    }

    @DeleteMapping("/{profileId}")
    public ResponseEntity<Profile> deleteProfile(@PathVariable UUID profileId) {
        this.profileService.deleteProfile(profileId);
        return ResponseEntity.noContent().build();
    }
}

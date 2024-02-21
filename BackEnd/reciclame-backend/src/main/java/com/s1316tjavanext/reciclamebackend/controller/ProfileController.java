package com.s1316tjavanext.reciclamebackend.controller;

import com.s1316tjavanext.reciclamebackend.entity.Profile;
import com.s1316tjavanext.reciclamebackend.service.ProfileService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@AllArgsConstructor
@RestController
@RequestMapping("/profile")
public class ProfileController {

    private final ProfileService profileService;

    @GetMapping("/{profileId}")
    public ResponseEntity<Profile> getProfile(@PathVariable UUID profileId) {
        return ResponseEntity.ok(profileService.getProfile(profileId));
    }

    @PostMapping
    public ResponseEntity<Profile> saveProfile(@RequestBody Profile profile) {
        return ResponseEntity.ok(profileService.saveProfile(profile));
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

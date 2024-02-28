package com.s1316tjavanext.reciclamebackend.controller;

import com.s1316tjavanext.reciclamebackend.dto.ProfileResponseDto;
import com.s1316tjavanext.reciclamebackend.dto.UserProfileRequestDto;
import com.s1316tjavanext.reciclamebackend.entity.Profile;
import com.s1316tjavanext.reciclamebackend.service.ProfileService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@RestController
@Tag(name = "Profile", description = "Endpoints for managing profiles")
@RequestMapping("/profiles")
public class ProfileController {

    private final ProfileService profileService;
//    private final ProfileMapper profileMapper;

    @GetMapping("/{profileId}")
    public ResponseEntity<ProfileResponseDto> getProfile(@PathVariable UUID profileId) {
        return profileService.getProfile(profileId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    @GetMapping("/all")
    public ResponseEntity<List<ProfileResponseDto>> getProfiles(){
        return ResponseEntity.ok(profileService.getProfiles());

    }

//    @PostMapping
//    @Operation(summary = "Register a new user", description = "Register a new user in the system")
//    public ResponseEntity<Profile> saveProfile(@RequestBody UserCreateDTO userCreateDTO) {
//        Profile profile = profileMapper.userCreateDTOToProfile(userCreateDTO);
//        return ResponseEntity.ok(profile);
//    }

    @PutMapping("/update/{profileId}")
    public ResponseEntity<ProfileResponseDto> updateProfile(@PathVariable UUID profileId,
                                                            @RequestBody UserProfileRequestDto userProfileRequestDto) {
        return ResponseEntity.ok(profileService.updateProfile(profileId, userProfileRequestDto));
    }

    @DeleteMapping("/delete/{profileId}")
    public ResponseEntity<Profile> deleteProfile(@PathVariable UUID profileId) {
        this.profileService.deleteProfile(profileId);
        return ResponseEntity.noContent().build();
    }
}

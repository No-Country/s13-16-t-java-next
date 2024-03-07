package com.s1316tjavanext.reciclamebackend.controller;

import com.s1316tjavanext.reciclamebackend.dto.*;
import com.s1316tjavanext.reciclamebackend.service.ProfileService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@RestController
@Tag(name = "Profile", description = "Endpoints for managing profiles")
@RequestMapping("/profiles")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProfileController {

    private final ProfileService profileService;

    @GetMapping("/{profileId}")
    public ResponseEntity<ProfileResponseDto> getProfile(@PathVariable UUID profileId) {
        return profileService.getProfile(profileId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    @GetMapping("/all")
    @Operation(summary = "Get all profiles", description = "Get all profiles existing in system")
    public ResponseEntity<List<ProfileResponseDto>> getProfiles(){
        return ResponseEntity.ok(profileService.getProfiles());
    }

    @GetMapping("/{profileId}/posts-closed")
    @Operation(summary = "Get posts closed by profile", description = "Get posts closed by profile given its id")
    public ResponseEntity<List<PostDto>> getPostsClosedByProfile(@PathVariable UUID profileId){
        return ResponseEntity.ok(profileService.getPostsClosedByProfile(profileId));
    }

    @GetMapping("/{profileId}/favoritePosts")
    @Operation(summary = "Get favorite posts by profile", description = "Get favorite posts by profile given its id")
    public ResponseEntity<List<PostDto>> getFavoritePosts(@PathVariable UUID profileId){
        return ResponseEntity.ok(profileService.getFavoritePosts(profileId));
    }

    @PutMapping("/{profileId}/favorites")
    @Operation(summary = "Update favorite posts by profile", description = "Set favorite posts by profile given its id")
    public ResponseEntity<Void> updateFavoritePost(@PathVariable UUID profileId,
                                                            @RequestBody PostFavoriteRequestDto postFavoriteRequestDto){
        try {
            profileService.updateFavoritePost(profileId,postFavoriteRequestDto.postId());
            return ResponseEntity.noContent().build();
        } catch (RuntimeException ignore){
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{profileId}")
    @Operation(summary = "Update profile", description = "Update profile given its id")
    public ResponseEntity<ProfileResponseDto> updateProfile(@PathVariable UUID profileId,
                                                            @RequestParam("image") MultipartFile mpf,
                                                             UserProfileRequestDto userProfileRequestDto
                                                            ) {

        try {
            return ResponseEntity.ok(profileService.updateProfile(profileId, userProfileRequestDto, mpf));
        }catch (RuntimeException ignore){
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/complete-profile/{profileId}")
    @Operation(summary = "Complete profile", description = "Complete profile given its id")
    public ResponseEntity<ProfileResponseDto> completeProfile(@PathVariable UUID profileId,
                                             @RequestParam("image") MultipartFile mpf,
                                             @RequestParam("categories") List<String> categories) {
        try {
            return ResponseEntity.ok(profileService.completeProfile(profileId, mpf, categories));
        }catch (RuntimeException ignore){
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{profileId}")
    @Operation(summary = "Delete profile", description = "Delete profile given its id")
    public ResponseEntity<Void> deleteProfile(@PathVariable UUID profileId) {
        try {
            profileService.deleteProfile(profileId);
            return ResponseEntity.noContent().build();
        }catch (RuntimeException ignore){
            return ResponseEntity.notFound().build();
        }
    }
}

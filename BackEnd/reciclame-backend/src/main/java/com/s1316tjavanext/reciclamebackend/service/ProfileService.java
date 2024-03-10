package com.s1316tjavanext.reciclamebackend.service;

import com.s1316tjavanext.reciclamebackend.dto.PostDto;
import com.s1316tjavanext.reciclamebackend.dto.ProfileResponseDto;
import com.s1316tjavanext.reciclamebackend.dto.UserProfileRequestDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ProfileService {
    Optional<ProfileResponseDto> getProfile(UUID profileId);
    ProfileResponseDto updateProfile(UUID profileId, UserProfileRequestDto userProfileRequestDto, MultipartFile mpf);

    ProfileResponseDto completeProfile(UUID profileId, MultipartFile mpf, List<String> categories);

    void deleteProfile(UUID profileId);

    List<ProfileResponseDto> getProfiles();

    List<PostDto> getFavoritePosts(UUID profileId);

    void updateFavoritePost(UUID profileId,UUID postId);

    List<PostDto> getPostsClosedByProfile(UUID profileId);
}

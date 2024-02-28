package com.s1316tjavanext.reciclamebackend.service;

import com.s1316tjavanext.reciclamebackend.dto.ProfileResponseDto;
import com.s1316tjavanext.reciclamebackend.dto.UserProfileRequestDto;
import com.s1316tjavanext.reciclamebackend.entity.Profile;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ProfileService {
    Optional<ProfileResponseDto> getProfile(UUID profileId);
//    public Profile saveProfile(Profile profile);
    ProfileResponseDto updateProfile(UUID profileId, UserProfileRequestDto userProfileRequestDto);
    public void deleteProfile(UUID profileId);

    List<ProfileResponseDto> getProfiles();
}

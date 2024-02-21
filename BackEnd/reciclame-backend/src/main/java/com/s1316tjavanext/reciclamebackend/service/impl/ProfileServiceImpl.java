package com.s1316tjavanext.reciclamebackend.service.impl;

import com.s1316tjavanext.reciclamebackend.entity.Profile;
import com.s1316tjavanext.reciclamebackend.repository.ProfileRepository;
import com.s1316tjavanext.reciclamebackend.service.ProfileService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@AllArgsConstructor
@Transactional
public class ProfileServiceImpl implements ProfileService {

    private final ProfileRepository profileRepository;

    @Override
    public Profile getProfile(UUID profileId) {
        return profileRepository.findById(profileId).orElse(null);
    }

    @Override
    public Profile saveProfile(Profile profile) {
        Profile newProfile = new Profile();
        System.out.println(profile.getBio());
        newProfile.setId(UUID.randomUUID());
        newProfile.setGivenName(profile.getGivenName());
        System.out.println(profile.getFamilyName());
        newProfile.setFamilyName(profile.getFamilyName());
        newProfile.setPhotoId(profile.getPhotoId());
        newProfile.setBio(profile.getBio());
        return profileRepository.save(newProfile);
    }

    @Override
    public Profile updateProfile(UUID profileId, Profile profile) {
       Profile optProfile = profileRepository.findById(profile.getId()).orElse(null);
       if(optProfile != null){
           return profileRepository.save(profile);
       }
       return null;
    }

    @Override
    public void deleteProfile(UUID profileId) {
        Profile optProfile = profileRepository.findById(profileId).orElse(null);
        if(optProfile != null){
            profileRepository.deleteById(profileId);
        }

    }
}

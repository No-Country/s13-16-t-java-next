package com.s1316tjavanext.reciclamebackend.service;

import com.s1316tjavanext.reciclamebackend.entity.Profile;
import org.springframework.stereotype.Service;

import java.util.UUID;

public interface ProfileService {
    public Profile getProfile(UUID profileId);
    public Profile saveProfile(Profile profile);
    public Profile updateProfile(UUID profileId, Profile profile);
    public void deleteProfile(UUID profileId);

}

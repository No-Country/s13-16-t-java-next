package com.s1316tjavanext.reciclamebackend.service.impl;

import com.s1316tjavanext.reciclamebackend.dto.ProfileResponseDto;
import com.s1316tjavanext.reciclamebackend.dto.UserProfileRequestDto;
import com.s1316tjavanext.reciclamebackend.dto.UserResponseDTO;
import com.s1316tjavanext.reciclamebackend.entity.Location;
import com.s1316tjavanext.reciclamebackend.entity.Profile;
import com.s1316tjavanext.reciclamebackend.entity.User;
import com.s1316tjavanext.reciclamebackend.mapper.ProfileMapper;
import com.s1316tjavanext.reciclamebackend.repository.LocationRepository;
import com.s1316tjavanext.reciclamebackend.repository.ProfileRepository;
import com.s1316tjavanext.reciclamebackend.service.ProfileService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
@Transactional
public class ProfileServiceImpl implements ProfileService {

    private final ProfileRepository profileRepository;
    private final ProfileMapper profileMapper;
    private final LocationRepository locationRepository;

    @Override
    public Optional<ProfileResponseDto> getProfile(UUID profileId) {
        return profileRepository.findById(profileId).map(profileMapper::profileToProfileResponseDto);
    }

//    @Override
//    public Profile saveProfile(Profile profile) {
//        Profile newProfile = new Profile();
//        newProfile.setId(UUID.randomUUID());
////        newProfile.setName(profile.getName());
////        newProfile.setLastName(profile.getLastName());
//        newProfile.setPhotoId(profile.getPhotoId());
//        newProfile.setBio(profile.getBio());
//        return profileRepository.save(newProfile);
//    }

    @Override
    public ProfileResponseDto updateProfile(UUID profileId, UserProfileRequestDto UserProfileRequestDto) {
       Optional<Profile> profileDB = profileRepository.findById(profileId);
       if (profileDB.isPresent()){
           ProfileResponseDto profileData = profileMapper.userProfileRequesDtoToProfileResponseDto(UserProfileRequestDto);
           //setear campos del profile
           profileDB.get().setBio(profileData.bio());

           User userDB = profileDB.get().getUser();
           UserResponseDTO userData = profileMapper.userProfileRequesDtoToUserResponseDTO(UserProfileRequestDto);
           userDB.setName(userData.name());
           userDB.setLastName(userData.lastName());
           userDB.setEmail(userData.email());
           userDB.setPhone(userData.phone());
           // TODO encoding
           userDB.setPassword(userData.password());
           Optional<Location> locationUpdate =locationRepository
                   .findById(userData.location_id());
           locationUpdate.ifPresent(userDB::setLocation);
           userDB.setBirthdate(userData.birthdate());
           profileDB.get().setUser(userDB);

           return profileMapper.profileToProfileResponseDto(profileRepository.save(profileDB.get()));
       }
       else throw new RuntimeException("id no encontrado");
    }

    @Override
    public void deleteProfile(UUID profileId) {
        Profile optProfile = profileRepository.findById(profileId).orElse(null);
        if(optProfile != null){
            profileRepository.deleteById(profileId);
        }

    }

    @Override
    public List<ProfileResponseDto> getProfiles() {
        return profileMapper.profilesToProfilesResponseDto(profileRepository.findAll());
    }
}

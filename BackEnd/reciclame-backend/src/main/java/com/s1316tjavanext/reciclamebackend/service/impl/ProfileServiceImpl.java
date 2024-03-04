package com.s1316tjavanext.reciclamebackend.service.impl;

import com.s1316tjavanext.reciclamebackend.dto.PostDto;
import com.s1316tjavanext.reciclamebackend.dto.ProfileResponseDto;
import com.s1316tjavanext.reciclamebackend.dto.UserProfileRequestDto;
import com.s1316tjavanext.reciclamebackend.dto.UserResponseDTO;
import com.s1316tjavanext.reciclamebackend.entity.*;
import com.s1316tjavanext.reciclamebackend.entity.enums.Category;
import com.s1316tjavanext.reciclamebackend.mapper.PostMapper;
import com.s1316tjavanext.reciclamebackend.mapper.ProfileMapper;
import com.s1316tjavanext.reciclamebackend.repository.FavoriteRepository;
import com.s1316tjavanext.reciclamebackend.repository.LocationRepository;
import com.s1316tjavanext.reciclamebackend.repository.PostRepository;
import com.s1316tjavanext.reciclamebackend.repository.ProfileRepository;
import com.s1316tjavanext.reciclamebackend.service.CloudinaryService;
import com.s1316tjavanext.reciclamebackend.service.ProfileService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.*;

@Service
@AllArgsConstructor
@Transactional
public class ProfileServiceImpl implements ProfileService {

    private final ProfileRepository profileRepository;
    private final ProfileMapper profileMapper;
    private final LocationRepository locationRepository;
    private final CloudinaryService cloudinaryService;
    private final FavoriteRepository favoriteRepository;
    private final PostRepository postRepository;
    private final PostMapper postMapper;

    @Override
    public Optional<ProfileResponseDto> getProfile(UUID profileId) {
        return profileRepository.findById(profileId).map(profileMapper::profileToProfileResponseDto);
    }

//    @Override
//    public Profile saveProfile(Profile profileResponseDto) {
//        Profile newProfile = new Profile();
//        newProfile.setId(UUID.randomUUID());
////        newProfile.setName(profileResponseDto.getName());
////        newProfile.setLastName(profileResponseDto.getLastName());
//        newProfile.setPhotoId(profileResponseDto.getPhotoId());
//        newProfile.setBio(profileResponseDto.getBio());
//        return profileRepository.save(newProfile);
//    }

    @Override
    public ProfileResponseDto updateProfile(UUID profileId,
                                            UserProfileRequestDto userProfileRequestDto,
                                            MultipartFile mpf) {
       Optional<Profile> profileDB = profileRepository.findById(profileId);
       if (profileDB.isPresent()){
           ProfileResponseDto profileData = profileMapper.userProfileRequesDtoToProfileResponseDto(userProfileRequestDto);
           profileDB.get().setBio(profileData.bio());
           setImageUrl(mpf,profileDB.get());

           listStringToListEnum(profileDB.get(), userProfileRequestDto.categories());

           User userDB = profileDB.get().getUser();
           UserResponseDTO userData = profileMapper.userProfileRequesDtoToUserResponseDTO(userProfileRequestDto);
           userDB.setName(userData.name());
           userDB.setLastName(userData.lastName());
           if (!userDB.getEmail().equals(userData.email())){
               userDB.setEmail(userData.email());
           }
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
    public ProfileResponseDto completeProfile(UUID profileId, MultipartFile mpf, List<String> categories){
        Optional<Profile> profileDB = profileRepository.findById(profileId);
        if (profileDB.isPresent()){
            setImageUrl(mpf,profileDB.get());
            listStringToListEnum(profileDB.get(),categories);
            return profileMapper.profileToProfileResponseDto(profileRepository.save(profileDB.get()));
        }
        else throw new RuntimeException("Perfil no encontrado");
    }

    @Override
    public void deleteProfile(UUID profileId) {
        Optional<Profile> optProfile = profileRepository.findById(profileId);
        if(optProfile.isPresent()){
            profileRepository.deleteById(profileId);
        }else throw new RuntimeException("id no encontrado");
    }

    @Override
    public List<ProfileResponseDto> getProfiles() {
        return profileMapper.profilesToProfilesResponseDto(profileRepository.findAll());
    }

    @Override
    public List<PostDto> getFavoritePosts(UUID profileId) {
        Optional<Profile> profile = profileRepository.findById(profileId);
        if (profile.isPresent()){
            List<Favorite> favorites = favoriteRepository.findAllByProfileId(profileId);

            List <Post> posts = favorites.stream().map(Favorite::getPost).toList();
            return postMapper.postsToPostsDto(posts);
        }else throw new RuntimeException("profile id no encontrado");
    }

    @Override
    public void updateFavoritePost(UUID profileId, UUID postId) {
        Optional<Post> post = postRepository.findById(postId);
        Optional<Profile> profile = profileRepository.findById(profileId);
        if (post.isPresent() && profile.isPresent()){
            Optional<Favorite> favoriteDB = favoriteRepository.findByPostIdAndProfileId(postId,profileId);
            if (favoriteDB.isPresent()){
                favoriteRepository.delete(favoriteDB.get());
            }else {
                Favorite favorite = new Favorite();
                favorite.setPost(post.get());
                favorite.setProfile(profile.get());
                favoriteRepository.save(favorite);
            }
        }else{
            throw new RuntimeException("ids not found");
        }
    }

    private boolean isImageNotNullNotEmpty(MultipartFile mpf) {
        return mpf != null &&
                !mpf.isEmpty();
    }
    private void setImageUrl(MultipartFile mpf, Profile profile) {
        if (isImageNotNullNotEmpty(mpf)){
            try {
                BufferedImage bi = ImageIO.read(mpf.getInputStream());
                Map result = cloudinaryService.upload(mpf);
                profile.setPhotoId((String) result.get("url"));
            } catch (IOException e){
                throw new RuntimeException("Photo not loaded");
            }
        }
    }

    private void listStringToListEnum(Profile profile,List<String> categories){
        profile.setCategories(new ArrayList<>());
        Arrays.stream(Category.values()).forEach(
                enumCategory -> {
                    categories.stream().forEach(
                            category -> {
                                if (category.equals(enumCategory.toString())){
                                    profile.getCategories().add(enumCategory);
                                }
                            }
                    );
                }
        );

    }
}

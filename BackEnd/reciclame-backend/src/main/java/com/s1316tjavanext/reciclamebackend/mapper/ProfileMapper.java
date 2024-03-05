package com.s1316tjavanext.reciclamebackend.mapper;

import com.s1316tjavanext.reciclamebackend.dto.*;
import com.s1316tjavanext.reciclamebackend.entity.Post;
import com.s1316tjavanext.reciclamebackend.entity.Profile;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProfileMapper {
    ProfileMapper INSTANCE = Mappers.getMapper(ProfileMapper.class);


    Profile userCreateDTOToProfile(UserCreateDTO userCreateDTO);
    @Mapping(source = "user", target = "userResponseDTO")
    @Mapping(source = "user.location", target = "userResponseDTO.location")
    ProfileResponseDto profileToProfileResponseDto(Profile profile);
    @Mapping(target = "comments",ignore = true)
    PostDto postToPostDto(Post post);
    List<ProfileResponseDto> profilesToProfilesResponseDto(List<Profile> profiles);

    UserResponseDTO userProfileRequesDtoToUserResponseDTO(UserProfileRequestDto userP);

    ProfileResponseDto userProfileRequesDtoToProfileResponseDto(UserProfileRequestDto userP);

    @InheritInverseConfiguration
    @Mapping(target = "posts", ignore = true)
    @Mapping(target = "postsFavorite", ignore = true)
    Profile profileResponseDtoToProfile(ProfileResponseDto profileResponseDto);





}

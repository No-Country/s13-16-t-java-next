package com.s1316tjavanext.reciclamebackend.mapper;

import com.s1316tjavanext.reciclamebackend.dto.ProfileResponseDto;
import com.s1316tjavanext.reciclamebackend.dto.UserCreateDTO;
import com.s1316tjavanext.reciclamebackend.dto.UserProfileRequestDto;
import com.s1316tjavanext.reciclamebackend.dto.UserResponseDTO;
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
    @Mapping(source = "user.location.id", target = "userResponseDTO.location_id")
    @Mapping(source = "profile.categories", target = "categories")
    ProfileResponseDto profileToProfileResponseDto(Profile profile);

    List<ProfileResponseDto> profilesToProfilesResponseDto(List<Profile> profiles);

    UserResponseDTO userProfileRequesDtoToUserResponseDTO(UserProfileRequestDto userP);

    ProfileResponseDto userProfileRequesDtoToProfileResponseDto(UserProfileRequestDto userP);

    @InheritInverseConfiguration
    Profile profileResponseDtoToProfile(ProfileResponseDto profileResponseDto);





}

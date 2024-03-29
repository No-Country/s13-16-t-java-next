package com.s1316tjavanext.reciclamebackend.mapper;

import com.s1316tjavanext.reciclamebackend.dto.UserRequestDTO;
import com.s1316tjavanext.reciclamebackend.dto.UserResponseDTO;
import com.s1316tjavanext.reciclamebackend.entity.User;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    @Mapping(target = "profileId", source = "profile.id")
    UserResponseDTO userToUserResponseDTO(User user);
    UserResponseDTO userRequestDTOToUserResponseDTO(UserRequestDTO userRequestDTO);

    List<UserResponseDTO> usersToUsersResponseDTO(List<User> users);

    @InheritInverseConfiguration
    @Mapping(target = "deleted", ignore = true)
    User userResponseDTOToUser(UserResponseDTO userResponseDTO);
}

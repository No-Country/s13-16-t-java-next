package com.s1316tjavanext.reciclamebackend.mapper;

import com.s1316tjavanext.reciclamebackend.dto.UserCreateDTO;
import com.s1316tjavanext.reciclamebackend.dto.UserRequestDTO;
import com.s1316tjavanext.reciclamebackend.dto.UserResponseDTO;
import com.s1316tjavanext.reciclamebackend.entity.Profile;
import com.s1316tjavanext.reciclamebackend.entity.User;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

//    @Mapping(source = "province.id", target = "province_id" )
    @Mapping(source = "location.id", target = "location_id" )
    UserResponseDTO userToUserResponseDTO(User user);
    UserResponseDTO userRequestDTOToUserResponseDTO(UserRequestDTO userRequestDTO);

    List<UserResponseDTO> usersToUsersResponseDTO(List<User> users);

    @InheritInverseConfiguration
    @Mapping(target = "perfil", ignore = true)
    User userResponseDTOToUser(UserResponseDTO userResponseDTO);
}

package com.s1316tjavanext.reciclamebackend.mapper;

import com.s1316tjavanext.reciclamebackend.dto.UserCreateDTO;
import com.s1316tjavanext.reciclamebackend.entity.Profile;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ProfileMapper {
    ProfileMapper INSTANCE = Mappers.getMapper(ProfileMapper.class);


    Profile userCreateDTOToProfile(UserCreateDTO userCreateDTO);
}

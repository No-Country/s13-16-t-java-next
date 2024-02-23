package com.s1316tjavanext.reciclamebackend.mapper;

import com.s1316tjavanext.reciclamebackend.dto.UserCreateDTO;
import com.s1316tjavanext.reciclamebackend.entity.Profile;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ProfileMapperTest {

    ProfileMapper profileMapper = Mappers.getMapper(ProfileMapper.class);

    @Test
    void shouldMapUserCreateDTOToProfile() {
        // Given
        UserCreateDTO userCreateDTO = new UserCreateDTO();
        userCreateDTO.setName("name");
        userCreateDTO.setLastName("lastName");
        userCreateDTO.setEmail("email");
        userCreateDTO.setPassword("password");
        userCreateDTO.setPhone("phone");
        userCreateDTO.setLocationId(1);
        // When
        Profile profile = profileMapper.userCreateDTOToProfile(userCreateDTO);
        // Then
        assertNotNull(profile);
        assertEquals("name", profile.getName());
        assertEquals("lastName", profile.getLastName());
    }

}
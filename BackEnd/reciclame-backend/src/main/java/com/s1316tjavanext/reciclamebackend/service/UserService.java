package com.s1316tjavanext.reciclamebackend.service;

import com.s1316tjavanext.reciclamebackend.dto.UserRequestDTO;
import com.s1316tjavanext.reciclamebackend.dto.UserResponseDTO;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserService {

    Optional<UserResponseDTO> getUser(UUID id);

    UserResponseDTO createUser(UserRequestDTO userRequestDTO);

    UserResponseDTO EditUser(UUID id, UserRequestDTO userRequestDTO);

    void eliminarUsuario(UUID id);

    List<UserResponseDTO> listUser();
}
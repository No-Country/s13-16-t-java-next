/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.s1316tjavanext.reciclamebackend.service;

import com.s1316tjavanext.reciclamebackend.dto.UserRequestDTO;
import com.s1316tjavanext.reciclamebackend.dto.UserResponseDTO;
import com.s1316tjavanext.reciclamebackend.entity.Location;
import com.s1316tjavanext.reciclamebackend.entity.Province;
import com.s1316tjavanext.reciclamebackend.entity.User;
import com.s1316tjavanext.reciclamebackend.exception.MiException;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 *
 * @author mathi
 */
public interface UserService {

     Optional<UserResponseDTO> getUser(UUID id);

     UserResponseDTO createUser(UserRequestDTO userRequestDTO);

    UserResponseDTO EditUser(UUID id, UserRequestDTO userRequestDTO);

    void eliminarUsuario(UUID id);

    List<UserResponseDTO> listUser();



}

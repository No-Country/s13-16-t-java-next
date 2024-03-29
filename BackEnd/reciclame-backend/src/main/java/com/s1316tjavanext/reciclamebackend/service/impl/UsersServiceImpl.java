/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.s1316tjavanext.reciclamebackend.service.impl;

import com.s1316tjavanext.reciclamebackend.dto.UserRequestDTO;
import com.s1316tjavanext.reciclamebackend.dto.UserResponseDTO;
import com.s1316tjavanext.reciclamebackend.entity.Location;
import com.s1316tjavanext.reciclamebackend.entity.Profile;
import com.s1316tjavanext.reciclamebackend.entity.User;
import com.s1316tjavanext.reciclamebackend.exception.IdNotFoundException;
import com.s1316tjavanext.reciclamebackend.mapper.UserMapper;
import com.s1316tjavanext.reciclamebackend.repository.LocationRepository;
import com.s1316tjavanext.reciclamebackend.repository.ProfileRepository;
import com.s1316tjavanext.reciclamebackend.repository.UserRepository;
import com.s1316tjavanext.reciclamebackend.service.UserService;
import com.s1316tjavanext.reciclamebackend.validator.ObjectsValidator;

import java.util.*;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author mathi
 */
@AllArgsConstructor
@Service
public class UsersServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ProfileRepository profileRepository;
    private final UserMapper userMapper;
    private final LocationRepository locationRepository;
    private final ObjectsValidator<UserRequestDTO> userValidator;

    // Obtener un usuario

    public Optional<UserResponseDTO> getUser(UUID id) {
        return userRepository.findById(id).map(userMapper::userToUserResponseDTO);
    }

    ////////ESTE ES PARA CREAR AL USUARIO USANDO VALIDACIONES //////////
    
    
    public UserResponseDTO createUser(UserRequestDTO userRequestDTO) {

        userValidator.validate(userRequestDTO);
        UserResponseDTO userResponse = userMapper.userRequestDTOToUserResponseDTO(userRequestDTO);
        User user = userMapper.userResponseDTOToUser(userResponse);
        user.setDeleted(false);
        Optional<Location> locationUpdate =locationRepository
                .findById(userRequestDTO.location_id());
        locationUpdate.ifPresent(user::setLocation);
        User userSaved = userRepository.save(user);
        Profile profileUser = userSaved.getProfile();
        profileUser.setUser(userSaved);
        profileRepository.save(profileUser);

        return userMapper.userToUserResponseDTO(userSaved);
    }
    
    
    ///////////    ESTO ES PARA EDITA   //////////

    @Transactional
  public UserResponseDTO EditUser(UUID id, UserRequestDTO userRequestDTO) {
    userValidator.validate(userRequestDTO);

    Optional<UserResponseDTO> respuesta = getUser(id);

    if (respuesta.isPresent()) {

        User user = userMapper.userResponseDTOToUser(respuesta.get());
        user.setEmail(userRequestDTO.email());
        user.setName(userRequestDTO.name());
        user.setLastName(userRequestDTO.lastName());
        user.setPassword(userRequestDTO.password());
        user.setBirthdate(userRequestDTO.birthdate());
        user.setPhone(userRequestDTO.phone());
        Optional<Location> locationUpdate =locationRepository
                .findById(userRequestDTO.location_id());
        locationUpdate.ifPresent(user::setLocation);

      return userMapper.userToUserResponseDTO(userRepository.save(user));
    } else {
        throw new IdNotFoundException("Usuario con id: " + id + " no encontrado");
    }
  }

    
    //////////    BORRAR USUARIO            /////////////
    
      @Transactional
  public void eliminarUsuario(UUID id) {

    Optional<User> respuesta = userRepository.findById(id);
    if (respuesta.isPresent()) {
      userRepository.deleteById(id);
    } else {
      throw new IdNotFoundException("id no encontrado");
    }
  }

  ///////////////  LISTAR USUARIOS  //////////////

  public List<UserResponseDTO> listUser() {
        return userMapper.usersToUsersResponseDTO(userRepository.findAll());
  }
}
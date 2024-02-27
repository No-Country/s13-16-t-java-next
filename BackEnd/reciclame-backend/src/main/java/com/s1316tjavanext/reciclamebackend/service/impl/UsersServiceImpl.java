/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.s1316tjavanext.reciclamebackend.service.impl;

import com.s1316tjavanext.reciclamebackend.dto.UserRequestDTO;
import com.s1316tjavanext.reciclamebackend.dto.UserResponseDTO;
import com.s1316tjavanext.reciclamebackend.entity.Location;
import com.s1316tjavanext.reciclamebackend.entity.Province;
import com.s1316tjavanext.reciclamebackend.entity.User;
import com.s1316tjavanext.reciclamebackend.mapper.UserMapper;
import com.s1316tjavanext.reciclamebackend.repository.UserRepository;
import com.s1316tjavanext.reciclamebackend.service.UserService;
import exception.MiException;

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
    private final UserMapper userMapper;


//    private boolean validarRequisitosPassword(String password) {
//        // Asegurar que la contraseña tiene al menos 8 caracteres, incluyendo mayúsculas y minúsculas
//        return password.length() >= 8 && contieneMayuscula(password) && contieneMinuscula(password);
//    }
//
//    private boolean contieneMayuscula(String password) {
//        return !password.equals(password.toLowerCase());
//    }
//
//    private boolean contieneMinuscula(String password) {
//        return !password.equals(password.toUpperCase());
//    }

    // Obtener un usuario

    public User getUser(UUID id) {
        return userRepository.findById(id).orElse(null);
    }

    ////////ESTE ES PARA CREAR AL USUARIO USANDO VALIDACIONES //////////
    
    
    public UserResponseDTO createUser(UserRequestDTO userRequestDTO)
             {

        UserResponseDTO userResponse = userMapper.userRequestDTOToUserResponseDTO(userRequestDTO);
        User user = userMapper.userResponseDTOToUser(userResponse);

        return userMapper.userToUserResponseDTO(userRepository.save(user));
    }
    
    
    ///////////    ESTO ES PARA EDITA   //////////
    
     @Transactional
  public User EditUser(UUID id, String email, String name, String lastName, Date birthdate, String password, String password2, String phone){

    User user = new User() {
    };

    Optional<User> respuesta = userRepository.findById(id);

    if (respuesta.isPresent()) {
      user = respuesta.get();
    }

//   validar(email, name,lastName, password, password2, birthdate, phone);

    user.setEmail(email);
    user.setName(name);
    user.setLastName(lastName);
    user.setPassword(password);
    user.setBirthdate(birthdate);
    user.setPhone(phone);

    return userRepository.save(user);
  }
    

    
    
    ///////////        ESTO ES PARA LAS VALIDACIONES ///////////////////
    
    
    public void validar(String email, String name, String lastName, String password, String password2, Date birthdate , String phone  ) throws MiException {

    if (name.isEmpty()) {
      throw new MiException("el nombre no puede ser nulo o estar vacio");
    }
    if (lastName.isEmpty()) {
      throw new MiException("el apellido no puede ser nulo o estar vacio");
    }

    if (email.isEmpty()) {
      throw new MiException("el email no puede ser nulo o estar vacio");
    }
    
     if (phone.isEmpty()) {
      throw new MiException("el telefono no puede ser nulo o estar vacio");
    }
     if (birthdate == null) {
      throw new MiException("su fecha de nacimiento deve ser valida");
    }

    if (password.isEmpty() || password == null || password.length() <= 5) {
      throw new MiException("la contraseña no puede estar vacia, y debe tener mas de 5 digitos");
    }
    if (!password.equals(password2)) {
      throw new MiException("las contraseñas ingresadas deben ser iguales");
    }
    }
    
    //////////    BORRAR USUARIO            /////////////
    
      @Transactional
  public void eliminarUsuario(UUID id) {

    Optional<User> respuesta = userRepository.findById(id);
    if (respuesta.isPresent()) {
      userRepository.deleteById(id);
    }
  }
  
  
  ///////////////  LISTAR USUARIOS  //////////////
  

  public List<User> listUser() {
    List<User> usuarios = new ArrayList();
    usuarios = userRepository.findAll();
    return usuarios;
  }
}
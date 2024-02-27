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
import exception.MiException;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 *
 * @author mathi
 */
public interface UserService {

    public User getUser(UUID id);

    public UserResponseDTO createUser(UserRequestDTO userRequestDTO);

    public User EditUser(UUID id, String email, String name, String lastName, Date birthdate, String password, String password2, String phone);

    public void eliminarUsuario(UUID id);

    public List<User> listUser();



}

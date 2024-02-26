/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.s1316tjavanext.reciclamebackend.service;

import exception.MiException;
import java.util.Date;

/**
 *
 * @author mathi
 */
public interface UserService {
    void createUser(String email, String name, Date birthdate, String password, String password2, String phone) throws MiException;
}

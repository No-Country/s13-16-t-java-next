/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.s1316tjavanext.reciclamebackend.service.impl;

import com.s1316tjavanext.reciclamebackend.entity.User;
import com.s1316tjavanext.reciclamebackend.repository.UserRepository;
import java.util.Date;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 *
 * @author mathi
 */
public class Userservice {
    
    
    @Autowired
    private UserRepository userRepository;

    /*
  /////////////   ESTO ES PARA VALIDAR LA CONTRASEÑA /////////////
    
  public void setPassword(Long userId, String newPassword) {
       
        User usuario = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (validarRequisitosPassword(newPassword)) {
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            usuario.setPassword(passwordEncoder.encode(newPassword));
            userRepository.save(usuario);
        } else {
            throw new IllegalArgumentException("La contraseña no cumple con los requisitos mínimos.");
        }
    }

    public boolean verifyPassword(String inputPassword) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.matches(inputPassword, this.password);
    }

    private boolean validarRequisitosPassword(String password) {
        // Asegurar que la contraseña tiene al menos 8 caracteres, incluyendo mayúsculas y minúsculas
        return password.length() >= 8 && contieneMayuscula(password) && contieneMinuscula(password);
    }

    private boolean contieneMayuscula(String password) {
        return !password.equals(password.toLowerCase());
    }

    private boolean contieneMinuscula(String password) {
        return !password.equals(password.toUpperCase());
    }

    
    
    ////////ESTE ES PARA CREAR AL USUARIO USANDO VALIDACIONES //////////
    
    
     public void createUser(String email, String name, String password, String password2) throws MiException {
    validar(email, name, password, password2);

    User user = new User();

    user.setEmail(email);
    user.setName(name);
    user.setPassword(new BCryptPasswordEncoder().encode(password));
    user.setBirthdate(new Date());
   

    userRepository.save(user);
  }
    
    
    ///////////    ESTO ES PARA EDITA   //////////
    
     @Transactional
  public void modificarCliente(Long id, String email, String name, String password, String password2) throws MiException {

    User user = new User() {
    };

    Optional<User> respuesta = userRepository.findById(id);

    if (respuesta.isPresent()) {
      user = respuesta.get();
    }

    validar(email, user, password, password2);
    user.setEmail(email);
    user.setName(name);
    user.setPassword(new BCryptPasswordEncoder().encode(password));

    userRepository.save(user);
  }
    

    
    
    ///////////        ESTO ES PARA LAS VALIDACIONES ///////////////////
    
    
    public void validar(String email, String name, String password, String password2, String phone , Date birthdate ) throws MiException {

    if (name.isEmpty()) {
      throw new MiException("el nombre no puede ser nulo o estar vacio");
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
    
    
   */ 
    
    
}

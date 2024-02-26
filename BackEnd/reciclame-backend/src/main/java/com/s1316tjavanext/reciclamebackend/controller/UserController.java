/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.s1316tjavanext.reciclamebackend.controller;

import com.s1316tjavanext.reciclamebackend.entity.User;
import com.s1316tjavanext.reciclamebackend.repository.UserRepository;
import com.s1316tjavanext.reciclamebackend.service.impl.UsersServiceImpl;
import exception.MiException;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author mathi
 */
@AllArgsConstructor
@RestController
@Tag(name = "Users", description = "Endpoints for managing users")
@RequestMapping("/profile")
public class UserController {
  private UserRepository usuarioRepository;
  private UsersServiceImpl userServiceImpl;
  
  ////////// CREAR USUARIO GET //////////
  
   @GetMapping("/crearUsuario")
  public String crearUsuario() {
    return "usuario_registro.html";
    /*-----Linkear a front----*/
  }
  
  
  
  ///////////  CREAR USUARIO POR POST ////////////
  @PostMapping("/crearUsuario")
  public String crearUsuario(@RequestParam String email, @RequestParam String nombre, @RequestParam String apellido, @RequestParam("fechaDeNacimiento") @DateTimeFormat(pattern = "yyyy-MM-dd") Date birthdate, @RequestParam String password, @RequestParam String password2, @RequestParam String phone, ModelMap modelo) {

    try {
      userServiceImpl.createUser(email, nombre,apellido, birthdate, password, password2, phone);
      modelo.put("exito", "El Usuario fue registrado correctamente!");
    } catch (MiException ex) {
      modelo.put("error", ex.getMessage());
      modelo.put("email", email);
      modelo.put("name", nombre);
      modelo.put("lastName", apellido);
      modelo.put("birthdate", birthdate);
      modelo.put("password", password);
      modelo.put("password2", password2);
      modelo.put("phone", phone);
      return "usuario_registro.html";
      
    }
    return "inicio.html";
}
  
  
  
  ///////////  PARAR EDITAR EL PERFIL ////////////////////////
  
  @PostMapping("/modificarUsuario/{id}")
  public String modificarUsuario(@PathVariable UUID id, @RequestParam String email, @RequestParam String nombre, @RequestParam String apellido, @RequestParam("fechaDeNacimiento") @DateTimeFormat(pattern = "yyyy-MM-dd") Date birthdate, @RequestParam String password, @RequestParam String password2, @RequestParam String phone, ModelMap modelo) {

    try {
      userServiceImpl.EditUser(id, email, nombre,apellido, birthdate, password, password2, phone);
      modelo.put("exito", "El Usuario fue modificado correctamente!");
    } catch (MiException e) {

      modelo.put("error", e.getMessage());
      modelo.put("email", email);
      modelo.put("name", nombre);
      modelo.put("lastName", apellido);
      modelo.put("birthdate", birthdate);
      modelo.put("password", password);
      modelo.put("password2", password2);
      modelo.put("phone", phone);
      return "usuario_modificar.html";
      
    }
    return "index.html";
  }
  
  
  /////////////////////      PARA ELIMINAR EL USUARIO  /////////////////////

   @GetMapping("/eliminarUsuario/{id}")
  public String eliminarUsuario(@PathVariable UUID id, ModelMap modelo) {

    try {

      userServiceImpl.eliminarUsuario(id);
      List<User> user = userServiceImpl.listUser();
      modelo.addAttribute("usuarios", user);
      modelo.put("exito", "El Usuario fue eliminado correctamente!");
      return "redirect:../index.html";

    } catch (Exception ex) {
      modelo.put("error", ex.getMessage());
      return "index.html";
      
    }
  }
  
  
  
}
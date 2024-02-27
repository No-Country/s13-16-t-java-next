/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.s1316tjavanext.reciclamebackend.controller;

import com.s1316tjavanext.reciclamebackend.dto.UserRequestDTO;
import com.s1316tjavanext.reciclamebackend.dto.UserResponseDTO;
import com.s1316tjavanext.reciclamebackend.entity.Location;
import com.s1316tjavanext.reciclamebackend.entity.Province;
import com.s1316tjavanext.reciclamebackend.entity.User;
import com.s1316tjavanext.reciclamebackend.repository.UserRepository;
import com.s1316tjavanext.reciclamebackend.service.UserService;
import exception.MiException;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author mathi
 */
@AllArgsConstructor
@RestController
@Tag(name = "Users", description = "Endpoints for managing users")
@RequestMapping("/users")
public class UserController {
  private final UserRepository usuarioRepository;
  private final UserService userService;

  
  ////////// CREAR USUARIO GET //////////

  @Operation(summary = "Get all users")
   @GetMapping
  public ResponseEntity<List<User>> getUsuario() {
    return ResponseEntity.ok().body(userService.listUser());
    /*-----Linkear a front----*/
  }
  
  
  
  ///////////  CREAR USUARIO POR POST ////////////
  @Operation(summary = "Create a user")
  @PostMapping("/crear-usuario")
  public ResponseEntity<UserResponseDTO> crearUsuario(@RequestBody UserRequestDTO userRequestDTO) {

  return ResponseEntity.ok().body(userService.createUser(userRequestDTO));
}
  
  ///////////  PARAR EDITAR EL PERFIL ////////////////////////

  @Operation(summary = "Edit a user")
  @PostMapping("/modificarUsuario/{id}")
  public ResponseEntity<User> modificarUsuario(@PathVariable UUID id,
                                 @RequestParam String email,
                                 @RequestParam String nombre,
                                 @RequestParam String apellido,
                                 @RequestParam("fechaDeNacimiento") @DateTimeFormat(pattern = "yyyy-MM-dd") Date birthdate,
                                 @RequestParam String password,
                                 @RequestParam String password2,
                                 @RequestParam String phone,
                                 ModelMap modelo) {

    return ResponseEntity.ok().body(userService.EditUser(id, email, nombre, apellido, birthdate, password, password2, phone));
  }
  
  
  /////////////////////      PARA ELIMINAR EL USUARIO  /////////////////////

  @Operation(summary = "Delete a user")
   @DeleteMapping("/delete/{id}")
  public ResponseEntity<Void> eliminarUsuario(@PathVariable UUID id, ModelMap modelo) {

    try {
      userService.eliminarUsuario(id);
      return ResponseEntity.noContent().build();

    } catch (Exception ex) {
        return ResponseEntity.notFound().build();
    }
  }
  
  
  
}
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.s1316tjavanext.reciclamebackend.controller;

import com.s1316tjavanext.reciclamebackend.dto.UserRequestDTO;
import com.s1316tjavanext.reciclamebackend.dto.UserResponseDTO;
import com.s1316tjavanext.reciclamebackend.repository.UserRepository;
import com.s1316tjavanext.reciclamebackend.service.UserService;
import java.util.List;
import java.util.UUID;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
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
   @GetMapping("/all")
  public ResponseEntity<List<UserResponseDTO>> getAll() {
    return ResponseEntity.ok().body(userService.listUser());
    /*-----Linkear a front----*/
  }

  @Operation(summary = "Get a user")
  @GetMapping("/{id}")
  public ResponseEntity<UserResponseDTO> getUserById(@PathVariable UUID id) {
    return userService.getUser(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
  }
  
  
  
  ///////////  CREAR USUARIO POR POST ////////////
  @Operation(summary = "Create a user")
  @PostMapping("/save")
  public ResponseEntity<UserResponseDTO> crearUsuario(@RequestBody UserRequestDTO userRequestDTO) {

  return ResponseEntity.ok().body(userService.createUser(userRequestDTO));
}
  
  ///////////  PARAR EDITAR EL PERFIL ////////////////////////

  @Operation(summary = "Edit a user")
  @PutMapping("/update/{id}")
  public ResponseEntity<UserResponseDTO> modificarUsuario(@PathVariable UUID id,@RequestBody UserRequestDTO userRequestDTO) {
    try{

    return ResponseEntity.ok().body(userService.EditUser(id,userRequestDTO));
    } catch (RuntimeException ex) {
      return ResponseEntity.notFound().build();
    }

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
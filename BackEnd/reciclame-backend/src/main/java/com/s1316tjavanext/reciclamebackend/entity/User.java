/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.s1316tjavanext.reciclamebackend.entity;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;


/**
 *
 * @author mathi
 */

@Entity
@Data
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", nullable = false)
    private UUID userId;
    
    @OneToOne
    @JoinColumn(name = "profile_id")
    private Profile perfil;
    
    @Column(name = "givenName", nullable=false)
    private String name;
    
    @Column(name = "givenlastName", nullable=false)
    private String lastName;
    
    @Column(name = "Email", nullable=false, length = 255)
    private String Email;
    
    @Column(name = "phone", nullable = false, length = 20)
    private String phone;
    
    @Column(name = "password", nullable = false)
    private String password;
    
    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL)
    private List<Province> province;

    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL)
    private List<Location> location;
    
    @Column(name = "birthdate", nullable = false)
    private Date birthdate;
    
}

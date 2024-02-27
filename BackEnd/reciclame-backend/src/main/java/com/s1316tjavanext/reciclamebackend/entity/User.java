/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.s1316tjavanext.reciclamebackend.entity;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import lombok.*;


/**
 *
 * @author mathi
 */

@Entity
@Data
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", nullable = false)
    private UUID userId;
    
    @OneToOne(mappedBy = "user")
    private Profile perfil;
    
    @Column(name = "givenName", nullable=false)
    private String name;
    
    @Column(name = "givenlastName", nullable=false)
    private String lastName;
    
    @Column(name = "email", nullable=false, length = 255)
    private String email;
    
    @Column(name = "phone", nullable = false, length = 20)
    private String phone;
    
    @Column(name = "password", nullable = false)
    private String password;

    @OneToOne
    @JoinColumn(name = "province_id", referencedColumnName = "id")
    private Province province;

    @OneToOne
    @JoinColumn(name = "location_id", referencedColumnName = "id")
    private Location location;
    
    @Column(name = "birthdate", nullable = false)
    private Date birthdate;
    
}

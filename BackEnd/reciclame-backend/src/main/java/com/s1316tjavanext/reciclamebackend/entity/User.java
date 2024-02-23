/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.s1316tjavanext.reciclamebackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.util.Date;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long userId; 
    
    //@OneToOne(fetch = FetchType.LAZY)
     //  private Profile profile;
    
    @Column(name = "givenName", nullable=false)
    private String name;
    
    @Column(name = "Email", nullable=false, length = 255)
    private String Email;
    
    @Column(name = "phone", nullable = false, length = 20)
    private String phone;
    
    @Column(name = "password", nullable = false)
    private String password;
    
    // @OneToMany(fetch = FetchType.LAZY);
    // @ToString.Exclude
    // @JoinColumn(name="cliente_id", nullable=false)
    // private Localidad cliente;
    
     @Column(name = "birthdate", nullable = false)
    private Date birthdate;
    
}

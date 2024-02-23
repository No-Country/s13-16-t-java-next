/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.s1316tjavanext.reciclamebackend.repository;

import com.s1316tjavanext.reciclamebackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author mathi
 */
public interface UserRepository extends JpaRepository<User, Long> {
    
}

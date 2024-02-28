/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.s1316tjavanext.reciclamebackend.entity;

import jakarta.persistence.*;

import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


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
@Table(name = "users")
@SQLDelete(sql = "UPDATE users SET  deleted = true WHERE id =?")
@Where(clause = "deleted=false")
public class User implements UserDetails {
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

    @ManyToOne
    @JoinColumn(name = "location_id", referencedColumnName = "id")
    private Location location;
    
    @Column(name = "birthdate", nullable = false)
    private Date birthdate;

    @Column(nullable = false)
    private boolean deleted;

    @Enumerated(value = EnumType.STRING)
    private Role role;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
	    return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
    
}

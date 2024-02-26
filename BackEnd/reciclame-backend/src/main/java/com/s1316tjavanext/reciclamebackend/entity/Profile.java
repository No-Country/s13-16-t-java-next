package com.s1316tjavanext.reciclamebackend.entity;

import com.fasterxml.jackson.annotation.JsonAlias;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.UUID;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "profiles")
@Schema(name = "Profile", description = "Profile of a user")
public class Profile implements Serializable {

    @Schema(name = "id", description = "Unique identifier of the profile", example = "123e4567-e89b-12d3-a456-426614174000")
    @Id
    private UUID id;
    @Column(name = "given_name")
    @Schema(name = "name", description = "Name of the user", example = "John")
    private String name;

    @Schema(name = "last_name", description = "Last name of the user", example = "Doe")
    @Column(name = "family_name")
    @JsonAlias("last_name")
    private String lastName;

    @Schema(name = "email", description = "Email of the user", example = "1234567")
    @Column(name = "photo_id")
    @JsonAlias("photo_id")
    private String photoId;

    @Schema(name = "bio", description = "Biography of the user", example = "I'm a software engineer")
    private String bio;

    @OneToOne
    @JoinColumn(name = "userId")
    private User user;
}

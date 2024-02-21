package com.s1316tjavanext.reciclamebackend.entity;

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
public class Profile implements Serializable {

    @Id
    private UUID id;
    @Column(name = "given_name")
    private String name;
    @Column(name = "family_name")
    private String lastName;
    @Column(name = "photo_id")
    private String photoId;
    private String bio;
}

package com.s1316tjavanext.reciclamebackend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "localidad")
@Data
public class Location {
    @Id
    private int id;

    @OneToOne
    @JoinColumn(name = "provincia_id")
    private Province province;

    @Column(name = "nombre")
    private String name;
}

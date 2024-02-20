package com.s1316tjavanext.reciclamebackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "provincia")
@Data
public class Province {
    @Id
    private int id;
    @Column(name = "nombre")
    private String name;

}

package com.s1316tjavanext.reciclamebackend.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "localidad")
@Data
@Schema(name = "Location", description = "Localidad")
public class Location {
    @Id
    @Schema(description = "Id de la locidad", example = "1")
    private int id;

    @ManyToOne
    @JoinColumn(name = "provincia_id")
    private Province province;

    @Column(name = "nombre")
    @Schema(description = "Nombre de la localidad", example = "Rosario")
    private String name;

}

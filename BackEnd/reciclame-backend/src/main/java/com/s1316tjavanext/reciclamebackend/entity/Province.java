package com.s1316tjavanext.reciclamebackend.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "provincia")
@Data
@Schema(name = "Province", description = "Provincia")
public class Province {
    @Id
    @Schema(description = "Id de la provincia", example = "1")
    private Byte id;

    @Column(name = "nombre")
    @Schema(description = "Nombre de la provincia", example = "Santa Fe")
    private String name;


}

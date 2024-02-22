package com.s1316tjavanext.reciclamebackend.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(name = "UserCreateDTO", description = "Data Transfer Object to create a user")
public class UserCreateDTO {
    @Schema(name = "name", description = "Name of the user", example = "John")
    private String name;
    @Schema(name = "last_name", description = "Last name of the user", example = "Doe")
    @JsonAlias("last_name")
    private String lastName;
    @Schema(name = "email", description = "Email of the user", example = "1234567")
    private String email;
    @Schema(name = "password", description = "Password of the user", example = "1234567")
    private String password;
    @Schema(name = "phone", description = "Phone of the user", example = "1234567")
    private String phone;
    @Schema(name = "location_id", description = "Location of the user", example = "1")
    @JsonAlias("location_id")
    private int locationId;
}

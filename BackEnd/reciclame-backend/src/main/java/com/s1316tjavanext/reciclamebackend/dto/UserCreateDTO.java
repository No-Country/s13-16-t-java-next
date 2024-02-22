package com.s1316tjavanext.reciclamebackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserCreateDTO {
    private String name;
    private String lastName;
    private String email;
    private String password;
    private String phone;
    private int locationId;
}

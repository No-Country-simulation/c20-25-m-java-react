package com.reforestart.backend.dto;

import com.reforestart.backend.entities.Arbol;
import com.reforestart.backend.entities.Role;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Data
public class UserDTO {

    private Long id;

    private String username;

    private String email;

    private String password;

    private List<RoleDTO> roles;

    private List<ArbolDTO> arboles;

}

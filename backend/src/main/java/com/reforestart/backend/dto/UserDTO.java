package com.reforestart.backend.dto;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.NotBlank;
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

    private boolean admin;

    private List<ArbolDTO> arboles;

}

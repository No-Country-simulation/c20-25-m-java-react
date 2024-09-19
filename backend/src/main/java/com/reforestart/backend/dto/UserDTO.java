package com.reforestart.backend.dto;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserDTO {

    private Long id;
    @NotBlank(message = "El nombre de usuario no puede estar vacío")
      @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String username;
    @NotBlank(message = "El email de usuario no puede estar vacío")
    private String email;

    @NotBlank(message = "La contraseña no puede estar vacía")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private List<RoleDTO> roles;

    private boolean admin;

    private List<ArbolDTO> arboles;

}

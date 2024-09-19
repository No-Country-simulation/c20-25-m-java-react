package com.reforestart.backend.dto;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reforestart.backend.validation.ExistsByUsername;
import jakarta.persistence.PrePersist;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserDTO {

    private Long id;

    @ExistsByUsername
    @NotBlank(message = "El nombre de usuario no puede estar vacío")
      @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String username;

    private String email;

    @NotBlank(message = "La contraseña no puede estar vacía")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private List<RoleDTO> roles;

//    private boolean enabled;
//
//    @PrePersist
//    public void prePersist(){
//        enabled=true;
//    }

    private boolean admin;

    private List<ArbolDTO> arboles;

}

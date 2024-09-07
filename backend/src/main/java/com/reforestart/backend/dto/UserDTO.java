package com.reforestart.backend.dto;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Data
public class UserDTO {

    private Long id;

    private String password;

    private AnagraficaDTO anagrafica;

    private List<ArbolDTO> arboles;

}

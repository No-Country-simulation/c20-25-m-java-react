package com.reforestart.backend.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Data
public class ArbolDTO {

    private Long id;

    private String nombre;

    private String nombreCientifico;

    private String descripcion;

    private Long precio;
}

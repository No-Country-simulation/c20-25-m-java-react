package com.reforestart.backend.dto;

import lombok.*;

import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class AnagraficaDTO {


    private Long id;

    private String nombre;

    private String apellido;

    private Date fechaDeNacimiento;

    private String lugarDeNacimiento;

}

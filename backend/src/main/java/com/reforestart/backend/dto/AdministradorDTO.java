package com.reforestart.backend.dto;

import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class AdministradorDTO {

    private Long id;

    private AnagraficaDTO anagrafica;
}

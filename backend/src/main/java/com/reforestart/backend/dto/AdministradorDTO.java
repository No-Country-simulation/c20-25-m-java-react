package com.reforestart.backend.dto;

import com.reforestart.backend.entities.Anagrafica;
import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class AdministradorDTO {

    private Long id;

    private Anagrafica anagrafica;
}

package com.reforestart.backend.dto;

import com.reforestart.backend.entities.Anagrafica;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Data
public class UserDTO {

    private Long id;

    private Anagrafica anagrafica;

}

package com.reforestart.backend.dto;

import com.reforestart.backend.entities.Arbol;
import com.reforestart.backend.entities.User;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Data
public class CarritoDeComprasDTO {

    private Long id;

    private Arbol arbol;

    private User usuario;
}

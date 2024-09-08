package com.reforestart.backend.dto;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Data
public class CarritoDeComprasDTO {

    private Long id;

    private List<ArbolDTO> arboles;
}

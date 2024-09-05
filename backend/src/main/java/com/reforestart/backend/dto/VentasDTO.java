package com.reforestart.backend.dto;

import com.reforestart.backend.entities.CarritoDeCompras;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class VentasDTO {


    private Long id;

    private CarritoDeCompras carritoDeCompras;


}

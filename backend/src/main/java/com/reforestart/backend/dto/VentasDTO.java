package com.reforestart.backend.dto;

import com.reforestart.backend.entities.User;
import lombok.*;

import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class VentasDTO {

    private Long id;

    private User user;

    private CarritoDeComprasDTO carritoDeCompras;

    private Date fechaVenta;
}

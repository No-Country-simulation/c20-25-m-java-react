package com.reforestart.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Table(name = "ventas")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Ventas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToOne
    @JoinColumn(name = "carrito_id", referencedColumnName = "id")
    private CarritoDeCompras carritoDeCompras;

    @Column(name = "fecha_de_venta")
    @Temporal(TemporalType.DATE)
    private Date fechaVenta;
}

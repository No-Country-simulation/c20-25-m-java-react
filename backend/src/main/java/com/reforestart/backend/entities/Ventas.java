package com.reforestart.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

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

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_carrito",referencedColumnName = "id")
    private CarritoDeCompras carritoDeCompras;


}

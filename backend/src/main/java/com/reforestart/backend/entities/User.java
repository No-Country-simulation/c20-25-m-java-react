package com.reforestart.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Table(name = "Usuarios")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_anagrafica",referencedColumnName = "id")
    private Anagrafica anagrafica;

    @ManyToOne
    @JoinColumn(name = "id_carrito", referencedColumnName = "id")
    private CarritoDeCompras carritoDeCompras;


}

package com.reforestart.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Table(name = "Carrito_compras")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CarritoDeCompras {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany
    @JoinColumn(name = "carrito_id")
    private List<Arbol> arboles;

}

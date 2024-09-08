package com.reforestart.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "arboles")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Arbol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String nombre;

    @Column
    private String nombreCientifico;

    @Column
    private String descripcion;

    @Column
    private Long precio;

}

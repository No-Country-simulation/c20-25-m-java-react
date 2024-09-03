package com.reforestart.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    @JoinColumn(name = "id_arbol",referencedColumnName = "id")
    private Arbol arbol;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_usuario",referencedColumnName = "id")
    private User usuario;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private Administrador administrador;
}

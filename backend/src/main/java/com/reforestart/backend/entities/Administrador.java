package com.reforestart.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Table(name = "administradores")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Administrador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "anagrafica_id", referencedColumnName = "id")
    private Anagrafica anagrafica;

}

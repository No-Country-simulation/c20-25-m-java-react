package com.reforestart.backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
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
    @NotEmpty
    @Size(min = 3, max = 30)
    private String nombre;

    @Column
    @NotEmpty
    private String nombreCientifico;

    @Column
    @NotEmpty
    private String descripcion;

    @Column
    @Min(500)
    @NotNull
    private Integer precio;

}

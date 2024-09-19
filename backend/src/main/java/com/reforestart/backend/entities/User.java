package com.reforestart.backend.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.reforestart.backend.validation.ExistsByUsername;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


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

    @ExistsByUsername
    @Column(unique = true)
    @NotBlank(message = "El username no puede estar en blanco")
    @Size(min = 4, max = 30)
    private String username;

    @Column(unique = true)
    private String email;

    @NotBlank(message = "El username no puede estar en blanco")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    @ManyToMany
    @JoinTable(
            name = "users_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"),
            uniqueConstraints = {@UniqueConstraint(columnNames = {"user_id", "role_id"})}
    )
    private List<Role> roles;

//    private boolean enabled;
//
//    @PrePersist
//    public void prePersist(){
//        enabled=true;
//    }

    @Transient
    private boolean admin;

    @OneToMany
    @JoinColumn(name = "user_id")
    private List<Arbol> arboles;
}

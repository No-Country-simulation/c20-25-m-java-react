package com.reforestart.backend.repository;

import com.reforestart.backend.entities.Administrador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAdministradorReporitory extends JpaRepository<Administrador, Long> {
}

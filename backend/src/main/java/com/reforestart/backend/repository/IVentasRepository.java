package com.reforestart.backend.repository;

import com.reforestart.backend.entities.Ventas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IVentasRepository extends JpaRepository<Ventas,Long> {
}

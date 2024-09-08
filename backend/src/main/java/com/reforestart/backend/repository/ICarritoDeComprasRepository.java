package com.reforestart.backend.repository;

import com.reforestart.backend.entities.CarritoDeCompras;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICarritoDeComprasRepository extends JpaRepository<CarritoDeCompras, Long> {
}

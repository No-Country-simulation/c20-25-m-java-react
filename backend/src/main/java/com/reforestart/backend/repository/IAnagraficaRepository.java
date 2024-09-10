package com.reforestart.backend.repository;

import com.reforestart.backend.entities.Anagrafica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAnagraficaRepository extends JpaRepository<Anagrafica, Long> {
}

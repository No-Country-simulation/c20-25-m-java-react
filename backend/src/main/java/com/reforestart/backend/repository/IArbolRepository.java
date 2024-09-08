package com.reforestart.backend.repository;

import com.reforestart.backend.entities.Arbol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IArbolRepository extends JpaRepository<Arbol, Long> {
}

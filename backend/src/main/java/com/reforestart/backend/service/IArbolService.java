package com.reforestart.backend.service;

import com.reforestart.backend.entities.Arbol;

import java.util.List;
import java.util.Optional;

public interface IArbolService {

    List<Arbol> findAll();

    Optional<Arbol> findById(Long id);

    Arbol saveAbol(Arbol arbol);

    Optional<Arbol> update( Long id,Arbol arbol);

    Optional<Arbol> delete(Long id);


}

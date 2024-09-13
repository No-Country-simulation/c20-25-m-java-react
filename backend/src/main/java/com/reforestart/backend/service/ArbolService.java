package com.reforestart.backend.service;

import com.reforestart.backend.entities.Arbol;
import com.reforestart.backend.repository.IArbolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ArbolService implements IArbolService {

    @Autowired
    private IArbolRepository arbolRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Arbol> findAll() {
        return arbolRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Arbol> findById(Long id) {
        return arbolRepository.findById(id);
    }

    @Override
    @Transactional
    public Arbol saveAbol(Arbol arbol) {
        return arbolRepository.save(arbol);
    }

    @Override
    @Transactional
    public Optional<Arbol> update(Long id, Arbol arbol) {
        Optional<Arbol> arbolOptional = arbolRepository.findById(id);
        if (arbolOptional.isPresent()) {
            Arbol arbol1 = arbolOptional.orElseThrow();
            arbol1.setNombre(arbol.getNombre());
            arbol1.setPrecio(arbol.getPrecio());
            arbol1.setNombreCientifico(arbol.getNombreCientifico());
            arbol1.setDescripcion(arbol.getDescripcion());
            return Optional.of(arbolRepository.save(arbol1));
        }
        return arbolOptional;
    }

    @Override
    @Transactional
    public Optional<Arbol> delete(Long id) {
        Optional<Arbol> arbolOptional = arbolRepository.findById(id);
        arbolOptional.ifPresent(arbol1 -> {
                    arbolRepository.delete(arbol1);
                }
        );
        return arbolOptional;
    }

}

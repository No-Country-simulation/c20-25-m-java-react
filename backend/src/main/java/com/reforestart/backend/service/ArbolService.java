package com.reforestart.backend.service;

import com.reforestart.backend.entities.Arbol;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArbolService implements IArbolService{
    @Override
    public List<Arbol> getArboles() {
        return null;
    }

    @Override
    public void saveAbol(Arbol arbol) {

    }

    @Override
    public void deleteArbol(Long id) {

    }

    @Override
    public Arbol findArbol(Long id) {
        return null;
    }

    @Override
    public void editArbol(Long id_original, String nombreNuevo, String nombreCientificoNuevo, String descripcionNuevo, Long precio) {

    }

    @Override
    public void editArbol(Arbol arbol) {

    }
}

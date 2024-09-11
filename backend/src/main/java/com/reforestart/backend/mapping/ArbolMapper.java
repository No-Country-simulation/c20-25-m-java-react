package com.reforestart.backend.mapping;

import com.reforestart.backend.dto.ArbolDTO;
import com.reforestart.backend.entities.Arbol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Component
public class ArbolMapper {


    public ArbolDTO arbolToDTO(Arbol arbol) {
        ArbolDTO arbolDTO = new ArbolDTO();
        arbolDTO.setId(arbol.getId());
        arbolDTO.setNombre(arbol.getNombre());
        arbolDTO.setDescripcion(arbol.getDescripcion());
        arbolDTO.setPrecio(arbol.getPrecio());
        arbolDTO.setNombreCientifico(arbol.getNombreCientifico());
        return arbolDTO;
    }

    public Arbol arbolToEntity(ArbolDTO arbolDTO) {
        Arbol arbol = new Arbol();
        arbol.setId(arbolDTO.getId());
        arbol.setNombre(arbolDTO.getNombre());
        arbol.setNombreCientifico(arbolDTO.getNombreCientifico());
        arbol.setDescripcion(arbolDTO.getDescripcion());
        arbol.setPrecio(arbolDTO.getPrecio());
        return arbol;
    }


    public List<ArbolDTO> arbolToDTOs(List<Arbol> arboles) {

        List<ArbolDTO> listaArbolDTOs = new ArrayList<>();
        if (arboles.isEmpty() || arboles.equals(null)) {
            return Collections.emptyList();
        }

        for (Arbol arbol : arboles){
            listaArbolDTOs.add(arbolToDTO(arbol));
        }

        return listaArbolDTOs;
    }

    public List<Arbol> arbolToEntities(List<ArbolDTO> arboles) {

        List<Arbol> listaArbol = new ArrayList<>();
        if (arboles.isEmpty() || arboles.equals(null)) {
            return Collections.emptyList();
        }

        for (ArbolDTO arbol : arboles){
            listaArbol.add(arbolToEntity(arbol));
        }

        return listaArbol;
    }
}

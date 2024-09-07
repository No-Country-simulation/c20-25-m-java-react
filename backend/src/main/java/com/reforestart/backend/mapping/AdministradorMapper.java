package com.reforestart.backend.mapping;

import com.reforestart.backend.dto.AdministradorDTO;
import com.reforestart.backend.entities.Administrador;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AdministradorMapper {

    @Autowired
    AnagraficaMapper anagraficaMapper;

    public AdministradorDTO administradorToDTO(Administrador administrador){

        AdministradorDTO administradorDTO = new AdministradorDTO();
        administradorDTO.setId(administrador.getId());
        administradorDTO.setAnagrafica(anagraficaMapper.anagraficaToDTO(administrador.getAnagrafica()));

        return administradorDTO;
    }

    public Administrador administradorToEntity(AdministradorDTO administradorDTO){

        Administrador administrador = new Administrador();

        administrador.setId(administradorDTO.getId());
        administrador.setAnagrafica(anagraficaMapper.anagraficaToEntity(administradorDTO.getAnagrafica()));

        return administrador;
    }


}

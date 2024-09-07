package com.reforestart.backend.mapping;

import com.reforestart.backend.dto.AnagraficaDTO;
import com.reforestart.backend.entities.Anagrafica;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Component
public class AnagraficaMapper {

    public List<AnagraficaDTO> anagraficasToDTOS(List<Anagrafica> anagraficas) {
        List<AnagraficaDTO> anagraficaDTOS = new ArrayList<>();
        if (anagraficas.isEmpty() || anagraficas.equals(null)) {
            return Collections.emptyList();
        }

        for (Anagrafica anagrafica : anagraficas) {
            anagraficaDTOS.add(anagraficaToDTO(anagrafica));
        }
        return anagraficaDTOS;
    }

    public AnagraficaDTO anagraficaToDTO(Anagrafica anagrafica) {

        AnagraficaDTO anagraficaDTO = new AnagraficaDTO();
        anagraficaDTO.setId(anagrafica.getId());
        anagraficaDTO.setNombre(anagrafica.getNombre());
        anagraficaDTO.setApellido(anagrafica.getApellido());
        anagraficaDTO.setLugarDeNacimiento(anagrafica.getLugarDeNacimiento());
        anagraficaDTO.setFechaDeNacimiento(anagrafica.getFechaDeNacimiento());

        return anagraficaDTO;
    }

    public Anagrafica anagraficaToEntity(AnagraficaDTO anagraficaDTO) {

        Anagrafica anagraficaEntity = new Anagrafica();
        anagraficaEntity.setNombre(anagraficaDTO.getNombre());
        anagraficaEntity.setApellido(anagraficaDTO.getApellido());
        anagraficaEntity.setFechaDeNacimiento(anagraficaDTO.getFechaDeNacimiento());
        anagraficaEntity.setLugarDeNacimiento(anagraficaDTO.getLugarDeNacimiento());

        return anagraficaEntity;
    }

}

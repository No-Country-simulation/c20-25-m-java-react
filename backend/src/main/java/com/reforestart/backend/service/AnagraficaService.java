package com.reforestart.backend.service;

import com.reforestart.backend.entities.Anagrafica;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class AnagraficaService implements IAnagraficaService{
    @Override
    public List<Anagrafica> getAnagraficas() {
        return null;
    }

    @Override
    public void saveAnagrafica(Anagrafica anagrafica) {

    }

    @Override
    public void deleteAnagrafica(Long id) {

    }

    @Override
    public Anagrafica findAnagrafica(Long id) {
        return null;
    }

    @Override
    public void editAnagrafica(Long id_original, String nombreNuevo, String apellidoNuevo, Date fechaDeNacimientoNuevo, String lugarDeNacimientoNuevo) {

    }

    @Override
    public void editAnagrafica(Anagrafica anagrafica) {

    }
}

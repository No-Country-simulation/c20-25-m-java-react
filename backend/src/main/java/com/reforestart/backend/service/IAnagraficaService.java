package com.reforestart.backend.service;

import com.reforestart.backend.entities.Anagrafica;

import java.sql.Date;
import java.util.List;

public interface IAnagraficaService {
    public List<Anagrafica> getAnagraficas();

    public  void saveAnagrafica(Anagrafica anagrafica);

    public void deleteAnagrafica(Long id);

    public Anagrafica findAnagrafica(Long id);

    public void  editAnagrafica(Long id_original,
                                String nombreNuevo,
                                String apellidoNuevo,
                                Date fechaDeNacimientoNuevo,
                                String lugarDeNacimientoNuevo);

    public void editAnagrafica(Anagrafica anagrafica);
}

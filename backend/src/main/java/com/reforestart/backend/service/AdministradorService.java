package com.reforestart.backend.service;

import com.reforestart.backend.entities.Administrador;
import com.reforestart.backend.entities.Anagrafica;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdministradorService implements IAdministradorService{
    @Override
    public List<Administrador> getAdminsAdministradores() {
        return null;
    }

    @Override
    public void saveAdministrador(Administrador administrador) {

    }

    @Override
    public void deleteAdministrador(Long id) {

    }

    @Override
    public Administrador findAdministrador(Long id) {
        return null;
    }

    @Override
    public void editAdministrador(Long id_original, Anagrafica anagrafica) {

    }

    @Override
    public void editAdministrador(Administrador administrador) {

    }
}

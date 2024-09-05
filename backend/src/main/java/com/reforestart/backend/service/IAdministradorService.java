package com.reforestart.backend.service;

import com.reforestart.backend.entities.Administrador;
import com.reforestart.backend.entities.Anagrafica;

import java.util.List;

public interface IAdministradorService {

    public List<Administrador> getAdminsAdministradores();

    public  void saveAdministrador (Administrador administrador);

    public void deleteAdministrador(Long id);

    public Administrador findAdministrador(Long id);

    public void  editAdministrador(Long id_original,
                                   Anagrafica anagrafica);

    public void editAdministrador(Administrador administrador);
}

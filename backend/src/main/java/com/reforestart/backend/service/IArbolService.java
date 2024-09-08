package com.reforestart.backend.service;
import com.reforestart.backend.entities.Arbol;

import java.util.List;

public interface IArbolService {

    public List<Arbol> getArboles();

    public  void saveAbol(Arbol arbol);

    public void deleteArbol(Long id);

    public Arbol findArbol(Long id);

    public void  editArbol(Long id_original,
                                String nombreNuevo,
                                String nombreCientificoNuevo,
                                String descripcionNuevo,
                                Long precio);

    public void editArbol(Arbol arbol);
}

package com.reforestart.backend.service;

import com.reforestart.backend.entities.CarritoDeCompras;
import com.reforestart.backend.entities.Ventas;

import java.util.List;

public interface IVentasService {
    public List<Ventas> getVentas();

    public void saveVenta(Ventas venta);

    public void deleteVenta(Long id);

    public Ventas findVentas(Long id);

    public void editVenta(Long id_original,
                          CarritoDeCompras carritoDeCompras
    );

    public void editVenta(Ventas venta);
}

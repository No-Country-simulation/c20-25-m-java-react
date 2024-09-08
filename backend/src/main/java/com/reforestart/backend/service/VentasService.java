package com.reforestart.backend.service;

import com.reforestart.backend.entities.CarritoDeCompras;
import com.reforestart.backend.entities.Ventas;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VentasService implements IVentasService {
    @Override
    public List<Ventas> getVentas() {
        return null;
    }

    @Override
    public void saveVenta(Ventas venta) {

    }

    @Override
    public void deleteVenta(Long id) {

    }

    @Override
    public Ventas findVentas(Long id) {
        return null;
    }

    @Override
    public void editVenta(Long id_original, CarritoDeCompras carritoDeCompras) {

    }

    @Override
    public void editVenta(Ventas venta) {

    }
}

package com.reforestart.backend.service;

import com.reforestart.backend.entities.Arbol;
import com.reforestart.backend.entities.CarritoDeCompras;
import com.reforestart.backend.entities.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarritoDeComprasService implements ICarritoDeComprasService{
    @Override
    public List<CarritoDeCompras> getCarritoDeCompras() {
        return null;
    }

    @Override
    public void saveCarrito(CarritoDeCompras carritoDeCompras) {

    }

    @Override
    public void deleteCarrito(Long id) {

    }

    @Override
    public CarritoDeCompras findCarritoDeCompras(Long id) {
        return null;
    }

    @Override
    public void editCarrito(Long id_original, List<Arbol> arbol, List<User> usuario) {

    }

    @Override
    public void editCarrito(CarritoDeCompras carritoDeCompras) {

    }
}

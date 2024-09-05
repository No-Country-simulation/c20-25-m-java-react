package com.reforestart.backend.service;

import com.reforestart.backend.entities.Arbol;
import com.reforestart.backend.entities.CarritoDeCompras;
import com.reforestart.backend.entities.User;

import java.util.List;

public interface ICarritoDeComprasService {

    public List<CarritoDeCompras> getCarritoDeCompras();

    public void saveCarrito(CarritoDeCompras carritoDeCompras);

    public void deleteCarrito(Long id);

    public CarritoDeCompras findCarritoDeCompras(Long id);

    public void editCarrito(Long id_original,
                            List<Arbol> arbol,
                            List<User> usuario
    );

    public void editCarrito(CarritoDeCompras carritoDeCompras);
}

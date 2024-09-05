package com.reforestart.backend.service;

import com.reforestart.backend.entities.Anagrafica;
import com.reforestart.backend.entities.User;

import java.util.List;

public interface IUserService {

    public List<User> getUsers();

    public  void saveUser (User usuario);

    public void deleteUser(Long id);

    public User findUser(Long id);

    public void  editUser(Long id_original,
                          Anagrafica anagrafica);

    public void editUser(User usuario);
}

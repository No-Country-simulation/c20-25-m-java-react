package com.reforestart.backend.service;

import com.reforestart.backend.entities.Anagrafica;
import com.reforestart.backend.entities.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService{
    @Override
    public List<User> getUsers() {
        return null;
    }

    @Override
    public void saveUser(User usuario) {

    }

    @Override
    public void deleteUser(Long id) {

    }

    @Override
    public User findUser(Long id) {
        return null;
    }

    @Override
    public void editUser(Long id_original, Anagrafica anagrafica) {

    }

    @Override
    public void editUser(User usuario) {

    }
}

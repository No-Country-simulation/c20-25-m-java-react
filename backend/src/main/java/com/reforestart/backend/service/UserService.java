package com.reforestart.backend.service;

import com.reforestart.backend.dto.UserDTO;
import com.reforestart.backend.entities.Anagrafica;
import com.reforestart.backend.entities.User;
import com.reforestart.backend.mapping.UserMapper;
import com.reforestart.backend.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService{

    @Autowired
    IUserRepository userRepository;
    @Autowired
    UserMapper userMapper;

    @Override
    public List<User> getUsers() {
        return null;
    }

    @Override
    public List<UserDTO> getUsersDTO() {
        List<UserDTO> listaUsers = userMapper.UsersToDTOs(userRepository.findAll());
        return listaUsers;
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

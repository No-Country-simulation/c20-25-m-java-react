package com.reforestart.backend.service;

import com.reforestart.backend.dto.UserDTO;
import com.reforestart.backend.entities.User;

import java.util.List;

public interface IUserService {

    List<User> findAll();


    User save(User user);

}

package com.reforestart.backend.service;

import com.reforestart.backend.dto.UserDTO;
import com.reforestart.backend.dto.UserPassworUsernameDTO;
import com.reforestart.backend.entities.User;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IUserService {

    List<UserDTO> findAll();

    UserDTO save(UserDTO user);

    @Transactional
    UserPassworUsernameDTO save(UserPassworUsernameDTO userDTO);

    boolean existsByUsername(String username);
}

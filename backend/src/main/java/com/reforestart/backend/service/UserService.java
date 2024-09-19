package com.reforestart.backend.service;


import com.reforestart.backend.dto.UserDTO;
import com.reforestart.backend.dto.UserPassworUsernameDTO;
import com.reforestart.backend.entities.Role;
import com.reforestart.backend.entities.User;
import com.reforestart.backend.mapping.RoleMapper;
import com.reforestart.backend.mapping.UserMapper;
import com.reforestart.backend.mapping.UserPNameMapper;
import com.reforestart.backend.repository.IRoleRepository;
import com.reforestart.backend.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService{

    @Autowired
    UserPNameMapper userPNameMapper;
    @Autowired
    RoleMapper roleMapper;
    @Autowired
    UserMapper userMapper;
    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IRoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;



    @Override
    @Transactional(readOnly = true)
    public List<UserDTO> findAll() {
        List<UserDTO> userDTO = userMapper.usersToDTOs(userRepository.findAll());
        return userDTO;
    }

    @Override
    @Transactional
    public UserDTO save(UserDTO userDTO) {

        User user = userMapper.userToEntity(userDTO);

        Optional<Role> optionalRoleUser = roleRepository.findByName("ROLE_USER");
        List<Role> roles = new ArrayList<>();

        if (optionalRoleUser.isPresent()) {
            roles.add(optionalRoleUser.get());
        } else {
            throw new IllegalArgumentException("El rol ROLE_USER no existe.");
        }

        if(userDTO.isAdmin()){
            Optional<Role> optionalRoleAdmin = roleRepository.findByName("ROLE_ADMIN");
            optionalRoleAdmin.ifPresent(roles::add);
        }

        user.setRoles(roles);

        // Validación de contraseña
       if (userDTO.getPassword()==null || userDTO.getPassword().isEmpty()) {
        throw new IllegalArgumentException("La contraseña no puede ser nula o vacía");
    }
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));

        User savedUser = userRepository.save(user);

        return userMapper.userToDTO(savedUser);
    }


    @Override
    @Transactional
    public UserPassworUsernameDTO save(UserPassworUsernameDTO userDTO) {

        User user = userPNameMapper.userPassToEntity(userDTO);

        Optional<Role> optionalRoleUser = roleRepository.findByName("ROLE_USER");
        List<Role> roles = new ArrayList<>();

        if (optionalRoleUser.isPresent()) {
            roles.add(optionalRoleUser.get());
        } else {
            throw new IllegalArgumentException("El rol ROLE_USER no existe.");
        }

        if(userDTO.isAdmin()){
            Optional<Role> optionalRoleAdmin = roleRepository.findByName("ROLE_ADMIN");
            optionalRoleAdmin.ifPresent(roles::add);
        }

        user.setRoles(roles);
        System.out.println("ESTOYYYYYYYYYYYYYYY EN EL Servicio 1");

        // Validación de contraseña
        if (userDTO.getPassword()==null || userDTO.getPassword().isEmpty()) {
            throw new IllegalArgumentException("La contraseña no puede ser nula o vacía");
        }
        System.out.println("ESTOYYYYYYYYYYYYYYY EN EL Service 2");
        // Codificar contraseña
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));

        User savedUser = userRepository.save(user);

        return userPNameMapper.userPassworUsernameToDTO(savedUser);
    }

    @Override
    @Transactional
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }


}

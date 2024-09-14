package com.reforestart.backend.service;


import com.reforestart.backend.dto.UserDTO;
import com.reforestart.backend.entities.Role;
import com.reforestart.backend.entities.User;
import com.reforestart.backend.mapping.RoleMapper;
import com.reforestart.backend.mapping.UserMapper;
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

        Optional<Role> optionalRoleUser = roleRepository.findByName("Role_USER");
        List<Role> roles = new ArrayList<>();

        optionalRoleUser.ifPresent(roles::add);

        if(userDTO.isAdmin()){
            Optional<Role> optionalRoleAdmin = roleRepository.findByName("ROLE_ADMIN");
            optionalRoleAdmin.ifPresent(roles::add);
        }

        user.setRoles(roles);
        System.out.println("ESTOYYYYYYYYYYYYYYY EN EL Servicio 1");

           if (userDTO.getPassword() == null || userDTO.getPassword().isEmpty()) {
            throw new IllegalArgumentException("La contraseña no puede ser nula o vacía");
        }
        System.out.println("ESTOYYYYYYYYYYYYYYY EN EL Service 2");

        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));

        User savedUser = userRepository.save(user);

        return userMapper.userToDTO(savedUser);
    }




}

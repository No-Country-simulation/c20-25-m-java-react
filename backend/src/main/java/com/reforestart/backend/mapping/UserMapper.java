package com.reforestart.backend.mapping;

import com.reforestart.backend.dto.UserDTO;
import com.reforestart.backend.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Component
public class UserMapper {

    @Autowired
    RoleMapper roleMapper;
    @Autowired
    ArbolMapper arbolMapper;

    public List<UserDTO> usersToDTOs(List<User> listaUsers) {

        List<UserDTO> listaUsersDTO = new ArrayList<>();

        if (listaUsers.isEmpty() || listaUsers==null) {
            return Collections.emptyList();
        }

        for (User user : listaUsers){
            listaUsersDTO.add(userToDTO(user));
        }

        return listaUsersDTO;
    }


    public UserDTO userToDTO(User user) {
        UserDTO userDTO = new UserDTO();

        userDTO.setEmail(user.getEmail());
        userDTO.setRoles(roleMapper.rolesToDTOs(user.getRoles()));
        userDTO.setUsername(user.getUsername());
        userDTO.setPassword(user.getPassword());
        userDTO.setArboles(arbolMapper.arbolToDTOs(user.getArboles()));

        return userDTO;
    }

    public List<User> usersToEntities(List<UserDTO> userDTOList) {

        List<User> userList = new ArrayList<>();

        if (userDTOList.isEmpty() || userDTOList.equals(null)) {
            return Collections.emptyList();
        }

        for (UserDTO userDTO : userDTOList){
            userList.add(userToEntity(userDTO));
        }

        return userList;
    }


    public User userToEntity(UserDTO userDTO) {
        User user = new User();

        user.setEmail(userDTO.getEmail());
        user.setRoles(roleMapper.rolesToEntities(userDTO.getRoles()));
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());
        user.setArboles(arbolMapper.arbolToEntities(userDTO.getArboles()));

        return user;
    }

}

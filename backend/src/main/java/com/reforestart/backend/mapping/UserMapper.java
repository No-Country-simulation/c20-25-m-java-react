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
    AnagraficaMapper anagraficaMapper;
    @Autowired
    ArbolMapper arbolMapper;

    public List<UserDTO> UsersToDTOs(List<User> listaUsers) {

        List<UserDTO> listaUsersDTO = new ArrayList<>();

        if (listaUsers.isEmpty() || listaUsers.equals(null)) {
            return Collections.emptyList();
        }

        for (User user : listaUsers){
            listaUsersDTO.add(userDTO(user));
        }

        return listaUsersDTO;
    }


    private UserDTO userDTO(User user) {
        UserDTO userDTO = new UserDTO();

        userDTO.setId(user.getId());
        userDTO.setAnagrafica(anagraficaMapper.anagraficaToDTO(user.getAnagrafica()));
        userDTO.setArboles(arbolMapper.arbolToDTOs(user.getArboles()));

        return userDTO;
    }
}

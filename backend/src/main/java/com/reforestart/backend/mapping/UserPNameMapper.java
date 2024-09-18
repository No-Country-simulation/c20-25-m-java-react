package com.reforestart.backend.mapping;

import com.reforestart.backend.dto.UserPassworUsernameDTO;
import com.reforestart.backend.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserPNameMapper {

    @Autowired
    RoleMapper roleMapper;

    public UserPassworUsernameDTO userPassworUsernameToDTO (User user){
        UserPassworUsernameDTO userPassworUsernameDTO = new UserPassworUsernameDTO();

        userPassworUsernameDTO.setUsername(user.getUsername());
        userPassworUsernameDTO.setPassword(userPassworUsernameDTO.getPassword());
        userPassworUsernameDTO.setAdmin(user.isAdmin());
        userPassworUsernameDTO.setRoles(roleMapper.rolesToDTOs(user.getRoles()));

        return userPassworUsernameDTO;
    }

    public User userPassToEntity (UserPassworUsernameDTO userPassworUsernameDTO){
        User user = new User();
        user.setPassword(userPassworUsernameDTO.getPassword());
        user.setUsername(userPassworUsernameDTO.getUsername());

        return user;
    }
}

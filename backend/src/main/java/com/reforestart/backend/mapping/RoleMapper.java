package com.reforestart.backend.mapping;

import com.reforestart.backend.dto.RoleDTO;
import com.reforestart.backend.entities.Role;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Component
public class RoleMapper {

    public RoleDTO roleToDTO (Role role){
        RoleDTO roleDTO = new RoleDTO();
        roleDTO.setName(role.getName());
        roleDTO.setId(role.getId());

        return roleDTO;
    }

    public Role roleToEntity (RoleDTO roleDTO){
        Role role = new Role();
        role.setName(roleDTO.getName());
        role.setId(roleDTO.getId());

        return role;
    }

    public List<Role> rolesToEntities (List<RoleDTO> roleDTOList){
        List<Role> roleList = new ArrayList<>();

        if (roleDTOList.isEmpty() || roleDTOList.equals(null))
            return Collections.emptyList();

        for (RoleDTO role: roleDTOList) {
            roleList.add(roleToEntity(role));
        }

        return  roleList;
    }

    public List<RoleDTO> rolesToDTOs (List<Role> roleList){
        List<RoleDTO> roleDTOList = new ArrayList<>();

        if (roleList.isEmpty() || roleDTOList.equals(null))
            return Collections.emptyList();

        for (Role role: roleList) {
            roleDTOList.add(roleToDTO(role));
        }

        return  roleDTOList;
    }
}

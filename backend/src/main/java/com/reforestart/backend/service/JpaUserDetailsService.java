package com.reforestart.backend.service;

import com.reforestart.backend.dto.UserDTO;
import com.reforestart.backend.entities.User;
import com.reforestart.backend.mapping.UserMapper;
import com.reforestart.backend.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class JpaUserDetailsService implements UserDetailsService {
    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    @Transactional(readOnly = true)
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<User> userOptional = userRepository.findByUsername(username);

        if (userOptional.isEmpty()) {
            throw new UsernameNotFoundException(String.format("Username %s no existe en el sistema!", username));
        }

        UserDTO userDTO = userMapper.userToDTO(userOptional.orElseThrow());

        List<GrantedAuthority> authorities = userDTO.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName()))
                .collect(Collectors.toList());

        return new org.springframework.security.core.userdetails.User(userDTO.getUsername(),
                userDTO.getPassword(),
                true,
                true,
                true,
                true,
                authorities);
    }
}

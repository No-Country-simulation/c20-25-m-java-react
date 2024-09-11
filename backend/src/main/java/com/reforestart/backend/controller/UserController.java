package com.reforestart.backend.controller;

import com.reforestart.backend.dto.UserDTO;
import com.reforestart.backend.entities.User;
import com.reforestart.backend.mapping.UserMapper;
import com.reforestart.backend.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    UserMapper userMapper;



    @GetMapping(value = "/getallusers")
    @Operation(
            summary = "Obtener Usuariso",
            description = "Traer todos los usuarios inscritos de nuestra base de datos.",
            tags = {"Control"},
            requestBody = @RequestBody(
                    description = "Controlde nuestros usuarios.",
                    required = false,
                    content = @Content(
                            mediaType = "application/json"
                    )
            ),
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Found"
                    )
            }
    )
    public ResponseEntity<List<UserDTO>> getAllUsers(){

        List<UserDTO> listaUsuarios = userMapper.usersToDTOs(userService.findAll());

        if (listaUsuarios.isEmpty()) {
            return new ResponseEntity<>(listaUsuarios, HttpStatus.FOUND);
        }

         return new ResponseEntity<>(listaUsuarios, HttpStatus.OK);
    }

    @GetMapping
    private List<User> userList(){
        return userService.findAll();
    }

    @PostMapping
    public ResponseEntity<User> create(@RequestBody User user){
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(user));
    }

}

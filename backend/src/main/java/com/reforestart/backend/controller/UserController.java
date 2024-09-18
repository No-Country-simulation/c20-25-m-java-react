package com.reforestart.backend.controller;

import com.reforestart.backend.dto.UserDTO;
import com.reforestart.backend.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    UserService userService;



    @GetMapping
    @Operation(
            summary = "Obtener Usuariso",
            description = "Traer todos los usuarios inscritos de nuestra base de datos.",
            tags = {"Control"},
            requestBody = @RequestBody(
                    description = "Controlde nuestros usuarios.",
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

        List<UserDTO> listaUsuarios = userService.findAll();

        if (listaUsuarios.isEmpty()) {
            return new ResponseEntity<>(listaUsuarios, HttpStatus.NOT_FOUND);
        }

         return new ResponseEntity<>(listaUsuarios, HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<?> create(@Valid @org.springframework.web.bind.annotation.RequestBody UserDTO userDTO, BindingResult result) {

        System.out.println(userDTO.getUsername());
        if (result.hasErrors()) {
            return validation(result);
        }
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(userDTO));
        }catch (IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }
    private ResponseEntity<?> validation(BindingResult result) {
        Map<String, String> errors = new HashMap<>();
        result.getFieldErrors().forEach(err ->
                errors.put(err.getField(), err.getDefaultMessage())  // Solo el mensaje de error sin duplicar el campo
        );

        return ResponseEntity.badRequest().body(errors);
    }
}

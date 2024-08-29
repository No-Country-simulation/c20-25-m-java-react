package com.reforestart.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/")
public class ControllerPueba {

    @GetMapping
    public ResponseEntity<String> prueba(){
        return ResponseEntity.ok("Todo Bonito y funcionando");
    }
}

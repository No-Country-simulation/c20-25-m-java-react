package com.reforestart.backend.controller;

import com.reforestart.backend.dto.ArbolDTO;
import com.reforestart.backend.entities.Arbol;
import com.reforestart.backend.mapping.ArbolMapper;
import com.reforestart.backend.service.ArbolService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/arboles")
public class ArbolController {

    @Autowired
    private ArbolService arbolService;

    @Autowired
    private ArbolMapper arbolMapper;

    @GetMapping
    public List<ArbolDTO> listArbol() {
        return arbolMapper.arbolToDTOs(arbolService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> viewArbol(@PathVariable Long id) {
        Optional<Arbol> arbolOptional = arbolService.findById(id);
        if (arbolOptional.isPresent()) {
            return ResponseEntity.ok(arbolOptional);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody Arbol arbol, BindingResult result) {
        if (result.hasErrors()){
            return validation(result);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(arbolService.saveAbol(arbol));
    }

    private ResponseEntity<?> validation(BindingResult result) {
        Map<String, String> errors = new HashMap<>();
        result.getFieldErrors().forEach(err->
                errors.put(err.getField(), "El campo "+err.getField()+" "+err.getDefaultMessage())
                );
        return ResponseEntity.badRequest().body(errors);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Arbol> update(@Valid @RequestBody Arbol arbol, BindingResult result ,@PathVariable Long id) {
        Optional<Arbol> arbolOptional = arbolService.update(id, arbol);
        if (arbolOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(arbolOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<Arbol> arbolOptional = arbolService.delete(id);
        if (arbolOptional.isPresent()) {
            return ResponseEntity.ok(arbolOptional);
        }
        return ResponseEntity.notFound().build();

    }
}

package com.reforestart.backend.validation;

import com.reforestart.backend.service.UserService;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ExistsByUsernameValidation implements ConstraintValidator<ExistsByUsername, String> {
    @Autowired
    private UserService userService;

    @Override
    public void initialize(ExistsByUsername constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(String username, ConstraintValidatorContext context) {
        return !userService.existsByUsername(username);
    }
}

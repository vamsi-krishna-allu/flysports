package com.flysports.register.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RegistrationController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<?> registerUser(@RequestBody UserDto userDto) {
        // Validate userDto, e.g., check for duplicate usernames, strong password requirements
        userService.registerNewUser(userDto);
        return ResponseEntity.ok("User registered successfully");
    }
}

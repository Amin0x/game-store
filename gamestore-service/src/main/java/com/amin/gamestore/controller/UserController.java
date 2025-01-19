package com.amin.gamestore.controller;

import com.amin.gamestore.model.User;
import com.amin.gamestore.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/users")
    public ResponseEntity<Object> createUser(@RequestBody User user) {
        if (user == null)
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);

        User newUser = new User();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(user.getPassword());
        newUser.setPhone(user.getPhone());
        newUser.setRole(user.getRole());
        newUser.setCreatedAt(new Date());
        newUser.setUpdatedAt(new Date());
        User result = userRepository.save(newUser);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<Object> updateUser(@ModelAttribute User user, @PathVariable Long id){
        if (user == null)
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);

        User curUser = userRepository.findById(id).orElseThrow();
        curUser.setPhone(user.getPhone());
        curUser.setUpdatedAt(new Date());

        return new ResponseEntity<>(userRepository.save(curUser), HttpStatus.OK);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Object> deleteUser(Long id){
        if (!userRepository.existsById(id))
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);

        userRepository.deleteById(id);
        return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    }

}

/*package com.example.boat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.boat.dto.UserContactUsDto;
import com.example.boat.entity.UserContactUs;
import com.example.boat.service.UserContactUsService;



@RestController
@RequestMapping("/auth")
public class UserContactUsController {
    @Autowired
    private UserContactUsService userContactUsService;
    
    @PostMapping("/user/postusercontact")
    @PreAuthorize("hasRole('USER')")

    public ResponseEntity<UserContactUs> addContactUs(@RequestBody UserContactUsDto userContactUsDto) {
        UserContactUs userContactUs = userContactUsService.addContactUs(userContactUsDto);
        return new ResponseEntity<>(userContactUs, HttpStatus.CREATED);
    }

    @GetMapping("/admin/getusercontact")
    @PreAuthorize("hasRole('ADMIN')")

    public List<UserContactUs> getAllUserContactUs() {
        return userContactUsService.getUserContactUs();

    }
    
    
}*/

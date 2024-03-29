package com.example.boat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.boat.dto.Request.AuthenticationRequest;
import com.example.boat.dto.Request.RegisterRequest;
import com.example.boat.dto.Response.AuthenticationResponse;
import com.example.boat.entity.UserRegister;
import com.example.boat.repository.UserRegisterRepository;
import com.example.boat.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")	
@RequiredArgsConstructor
public class AuthenticationController {
    @Autowired
	private UserRegisterRepository userRegisterRepository;
	private final AuthenticationService service;
	@PostMapping("/register")
	 public ResponseEntity<String> register(
		      @RequestBody RegisterRequest request
		  ) {
		service.register(request);
		    return ResponseEntity.ok("Registered Successfully");
		  }
	@GetMapping("/getregister")
	public List<UserRegister> getregister()
	{
		return userRegisterRepository.findAll();
		
	}

		  @PostMapping("/authentication")
		  public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request)
		  {
			return ResponseEntity.ok(service.authenticate(request));
			  
		  }
    
}

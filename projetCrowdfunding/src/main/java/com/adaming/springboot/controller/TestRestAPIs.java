package com.adaming.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adaming.springboot.model.User;
import com.adaming.springboot.repository.UserRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestRestAPIs {
	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/user")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public String userAccess() {
		return "Dispaly Users Contents!";
	}
	
	@GetMapping("/currentUser/{un}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('PM')")
	public User findByUserName(@PathVariable("un")String un) {
		return userRepository.findByUsername(un).get();
	}

	@GetMapping("/pm")
	@PreAuthorize("hasRole('PM') or hasRole('ADMIN')")
	public String projectManagementAccess() {
		return "Display PMs Content here.";
	}
	
	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		return "Only Admin Content here. No unauthorized access!";
	}
}
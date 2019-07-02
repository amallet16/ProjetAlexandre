package com.adaming.springboot;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.adaming.springboot.model.Role;
import com.adaming.springboot.model.RoleName;
import com.adaming.springboot.model.User;
import com.adaming.springboot.repository.RoleRepository;
import com.adaming.springboot.repository.UserRepository;



@SpringBootApplication
public class ProjetCrowdfundingApplication implements CommandLineRunner{
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	PasswordEncoder encoder;

	public static void main(String[] args) {
		SpringApplication.run(ProjetCrowdfundingApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		User u1 = new User();
		u1.setEmail("paul@adaming.com");
		u1.setName("Paul");
		u1.setPassword(encoder.encode("Password1"));
		u1.setUsername("paul");
		createUser(u1, RoleName.ROLE_ADMIN);
		
		User u2 = new User();
		u2.setEmail("alice@adaming.com");
		u2.setName("Alice");
		u2.setPassword(encoder.encode("Password1"));
		u2.setUsername("alice");
		createUser(u2, RoleName.ROLE_PM);
		
		
	}
	private User createUser(User user, RoleName roleName) {
		if(userRepository.existsByUsername(user.getUsername())) {
			System.out.println(user.getUsername() + " already exists. Nothing to do");
		}else {
			Set<Role> roles = new HashSet<>();
			Role role = roleRepository.findByName(roleName).get();
			roles.add(role);
			user.setRoles(roles);
			user = userRepository.save(user);
		}
		return user;
	}
}
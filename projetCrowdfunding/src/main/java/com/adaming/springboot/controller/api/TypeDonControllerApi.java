package com.adaming.springboot.controller.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adaming.springboot.model.TypeDon;
import com.adaming.springboot.services.TypeDonService;

@RestController
@RequestMapping(value="/api/typeDon")
@PreAuthorize("hasRole('PM') or hasRole('ADMIN') or hasRole('USER')")
public class TypeDonControllerApi {

	@Autowired
	private TypeDonService typeDonService;
	
	@GetMapping(value="")
	public List<TypeDon> findAll(){
		return typeDonService.findAll();
	}
}

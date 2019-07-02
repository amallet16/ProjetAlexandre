package com.adaming.springboot.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.springboot.model.TypeDon;
import com.adaming.springboot.repository.TypeDonRepository;
import com.adaming.springboot.services.TypeDonService;

@Service
public class TypeDonServiceImpl implements TypeDonService {

	@Autowired
	private TypeDonRepository typeDonRepository;
	
	@Override
	public List<TypeDon> findAll() {
		
		return typeDonRepository.findAll();
	}

}

package com.adaming.springboot.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.springboot.model.Category;
import com.adaming.springboot.repository.CategoryRepository;
import com.adaming.springboot.services.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;
	@Override
	public List<Category> findAll() {
		
		return categoryRepository.findAll();
	}

	@Override
	public Category findById(Long id) {
		
		return categoryRepository.findById(id).get();
	}

	@Override
	public Category deleteById(Long id) {
		Category temp = findById(id);
		categoryRepository.deleteById(id);
		return temp;
	}

	@Override
	public Category save(Category category) {
		
		return categoryRepository.save(category);
	}

}

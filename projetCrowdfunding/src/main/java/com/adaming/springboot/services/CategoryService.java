package com.adaming.springboot.services;

import java.util.List;

import com.adaming.springboot.model.Category;

public interface CategoryService {

	public List<Category> findAll();
	public Category findById(Long id);
	public Category deleteById(Long id);
	public Category save(Category product);
}

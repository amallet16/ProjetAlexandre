package com.adaming.springboot.services;

import java.util.List;

import com.adaming.springboot.model.Category;
import com.adaming.springboot.model.Project;

public interface ProjectService {

	public List<Project> findAll();
	public Project findById(Long id);
	public Project deleteById(Long id);
	public Project save(Project product);
	public List<Project> findByCategory(Category category);
}

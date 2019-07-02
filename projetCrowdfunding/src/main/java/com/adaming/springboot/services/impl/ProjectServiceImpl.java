package com.adaming.springboot.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.springboot.model.Category;
import com.adaming.springboot.model.Project;
import com.adaming.springboot.repository.ProjectRepository;
import com.adaming.springboot.services.ProjectService;

@Service
public class ProjectServiceImpl implements ProjectService {

	@Autowired
	private ProjectRepository projectRepository;
	
	@Override
	public List<Project> findAll() {
		
		return projectRepository.findAll();
	}

	@Override
	public Project findById(Long id) {
		
		return projectRepository.findById(id).get();
	}

	@Override
	public Project deleteById(Long id) {
		Project temp = findById(id);
		projectRepository.deleteById(id);
		return temp;
	}

	@Override
	public Project save(Project project) {
		
		return projectRepository.save(project);
	}

	@Override
	public List<Project> findByCategory(Category category) {
		
		return projectRepository.findByCategory(category);
	}

}

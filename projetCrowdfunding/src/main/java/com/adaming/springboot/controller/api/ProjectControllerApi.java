package com.adaming.springboot.controller.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adaming.springboot.model.Category;
import com.adaming.springboot.model.Project;
import com.adaming.springboot.services.CategoryService;
import com.adaming.springboot.services.ProjectService;

@RestController
@RequestMapping(value="/api/projects")
@PreAuthorize("hasRole('PM') or hasRole('ADMIN') or hasRole('USER')")
public class ProjectControllerApi {

	@Autowired
	private ProjectService projectService;
	
	@Autowired
	private CategoryService categoryService;
	
	@GetMapping(value="/{projectId}")
	public Project findById(@PathVariable("projectId")Long id) {
		Project project =projectService.findById(id);
		
		return project;
	}
	
	@GetMapping(value="")
	public List<Project> findAll(){
		return projectService.findAll();
	}
	
	@PostMapping(value="")
	public Project save(@RequestBody Project project) {
		System.out.println("Saving... " );
		return projectService.save(project);
	}
	@RequestMapping(value="/{id}/delete")
	public Project deleteProject(@PathVariable("id")Long id) {
		return projectService.deleteById(id);
	}
	
	@GetMapping(value="/category/{cid}")
	public List<Project> findByCategory(@PathVariable("cid")Long id){
		return projectService.findByCategory(categoryService.findById(id));
	}
}

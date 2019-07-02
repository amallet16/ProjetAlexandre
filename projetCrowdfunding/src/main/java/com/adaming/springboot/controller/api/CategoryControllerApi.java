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
import com.adaming.springboot.services.CategoryService;

@RestController
@RequestMapping(value="/api/categories")
//@PreAuthorize("hasRole('PM') or hasRole('ADMIN') or hasRole('USER')")
public class CategoryControllerApi {

	@Autowired
	private CategoryService categoryService;
	
	@GetMapping(value="/{categoryId}")
	public Category findById(@PathVariable("categoryId")Long id) {
		Category category = categoryService.findById(id);
		
		return category;
	}
	
	@GetMapping(value="")
	public List<Category> findAll(){
		return categoryService.findAll();
	}
	
	@PostMapping(value="")
	public Category save(@RequestBody Category category) {
		System.out.println("Saving... ");
		return categoryService.save(category);
	}
	@RequestMapping(value="/{id}/delete")
	public Category deleteCategory(@PathVariable("id")Long id) {
		return categoryService.deleteById(id);
	}
	
	
}

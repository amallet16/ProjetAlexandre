package com.adaming.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.adaming.springboot.model.Category;
import com.adaming.springboot.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {

	public List<Project> findByCategory(Category category);
}

package com.adaming.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.adaming.springboot.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
	

}

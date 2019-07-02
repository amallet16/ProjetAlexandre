package com.adaming.springboot.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Project {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String description;
	private Double budget;
	private Date beginDate;
	private Date endDate;
	private String nameEnt;
	private String pmName;
	private String pmMail;	
	private Double interet;
	private Double count;
	@ManyToOne(cascade=CascadeType.DETACH)
	@JoinColumn(name="category")
	private Category category;
	
	@ManyToOne(cascade=CascadeType.DETACH)
	@JoinColumn(name="typeDon")
	private TypeDon typeDon;
	
	public Project() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getBeginDate() {
		return beginDate;
	}

	public void setBeginDate(Date beginDate) {
		this.beginDate = beginDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getNameEnt() {
		return nameEnt;
	}

	public void setNameEnt(String nameEnt) {
		this.nameEnt = nameEnt;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getPmName() {
		return pmName;
	}

	public void setPmName(String pmName) {
		this.pmName = pmName;
	}

	public String getPmMail() {
		return pmMail;
	}

	public void setPmMail(String pmMail) {
		this.pmMail = pmMail;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getBudget() {
		return budget;
	}

	public void setBudget(Double budget) {
		this.budget = budget;
	}

	public TypeDon getTypeDon() {
		return typeDon;
	}

	public void setTypeDon(TypeDon typeDon) {
		this.typeDon = typeDon;
	}

	public Double getInteret() {
		return interet;
	}

	public void setInteret(Double interet) {
		this.interet = interet;
	}

	public Double getCount() {
		return count;
	}

	public void setCount(Double count) {
		this.count = count;
	}
	
	
	
}

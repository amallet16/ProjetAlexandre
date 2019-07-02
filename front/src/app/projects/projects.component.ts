import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Project } from '../models/project';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectForm: FormGroup;
  projects: Project[];
  categories: Category[];

  constructor( private fb: FormBuilder, 
    private projectService: ProjectService,
    private categoryService: CategoryService,
    private route: Router){}
 

  ngOnInit() {
    this.initProjectForm();
    this.findAll();
    this.findAllCategories();
    console.log("Afficher apres findAll() --------");
  }
  initProjectForm(){
    this.projectForm = this.fb.group({
      name: [''],
      description: [''],
      beginDate: [''],
      endDate: [''],
      budget: [''],
      typeDon: [''],
      nameEnt: [''],    
      pmName: [''],
      pmMail: [''],
      category: [''],
      interet: [''],
      count: ['']
    });
  }
  saveProject(){
    console.log('Produit form values: ', this.projectForm.value);
    console.log('Produit form values: ', this.projectForm.value.category);
    this.projectService.save(this.projectForm.value)
                      .subscribe(res => {
                        console.log("Response: ", res);
                        this.initProjectForm();
                        this.findAll();
                      });
  }
  findAll(){
    
    return this.projectService.findAll()
                .subscribe(res => {
                  console.log("Afficher Avant l'autre ligne  --- 1 ");
                        console.log('Resultat: ', res);
                        this.projects = res;
                    });
  }
  findAllCategories(){
    
    return this.categoryService.findAll()
                .subscribe(res => {
                  console.log("Afficher Avant l'autre ligne  --- 1 ");
                        console.log('Resultat: ', res);
                        this.categories = res;
                    });
  }
}

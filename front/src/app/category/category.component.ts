import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryId : number;
  projects: Project[];
  categories: Category[];
  category : Category;
  
  constructor( private fb: FormBuilder, 
    private categoryService: CategoryService,
    private projectService: ProjectService,
    private router: ActivatedRoute,
    private route: Router) { 
    
  }

  ngOnInit() {
   this.router.paramMap.subscribe(res =>{
     this.categoryId = +res.get('id');
     this.findById(this.categoryId);
     

   })
  }
  test(){
    console.log("test")
  }
  findAllProjects(){
      this.projectService.findByCategory(this.category).subscribe(res =>{
      this.projects = res;
      this.findAllProjects();
    })

  }

  findById(cid: number){
    this.categoryService.findById(cid).subscribe(res =>{
      this.category = res;
      console.log(this.category);
      this.findAllProjects();
    })
  }
}

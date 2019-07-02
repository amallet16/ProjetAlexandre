import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { Category } from '../models/category';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectService } from '../services/project.service';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
import { TypeDon } from '../models/typeDon';
import { TypeDonService } from '../services/typeDon.service';
import { User } from '../models/user';
import { TokenStorageService } from '../auth/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  projectForm: FormGroup;
  project: Project;
  currentUser : User;
  categories: Category[];
  typesDon: TypeDon[];

  constructor(private fb: FormBuilder, 
    private projectService: ProjectService,
    private typeDonService: TypeDonService,
    private categoryService: CategoryService,
    private us: UserService,
    private tss: TokenStorageService,
    private route: Router
  ) { }

  ngOnInit() {
    let un = this.tss.getUsername();
    if(un){
    this.us.findByUN(un).subscribe(res =>{
      this.currentUser = res;
      console.log('currentUser', this.currentUser)
    });}
    this.initProjectForm();
    this.findAllCategories();
    this.findAllTypesDon();
  }
  initProjectForm(){
    this.projectForm = this.fb.group({
      name: [''],
      description: [''],
      beginDate: [''],
      endDate: [''],
      nameEnt: [''],    
      pmName: [''],
      typeDon: [''],
      budget: [''],
      pmMail: [''],
      category: [''],
      interet: [''],
      count: ['']
    });
  }
  saveProject(){
    let project : Project = this.projectForm.value;
    console.log('Produit form values: ', this.projectForm.value);
    //this.currentUser.name = this.project.pmName;
    //this.currentUser.email = this.project.pmMail;
    this.projectService.save(this.projectForm.value)
                      .subscribe(res => {
                        console.log("Response: ", res);
                        this.initProjectForm();
                        this.route.navigate(["/projects"])
                      });
  }
  findAllTypesDon(){

    return this.typeDonService.findAll().subscribe(res =>{
      console.log('Resultat: ', res);
      this.typesDon = res;
    })
  }
  find
 
  findAllCategories(){
    
    return this.categoryService.findAll()
                .subscribe(res => {
                  console.log("Afficher Avant l'autre ligne  --- 1 ");
                        console.log('Resultat: ', res);
                        this.categories = res;
                    });
  }

  findById(){
    return this.projectService.findById
  }
  

}

import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectId : number;
  project : Project;
  projectEditForm : FormGroup;

  constructor(
    private ps : ProjectService,
    private router : ActivatedRoute,
    private fb : FormBuilder,
    private route : Router

  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe( res => {
      this.projectId = +res.get('id');
      this.findById(this.projectId);
    })
  }
  findById(pid: number){
    this.ps.findById(pid).subscribe(res =>{
      this.project = res;
      this.initProjectEditForm();
    });
  }
  initProjectEditForm(){
    this.projectEditForm = this.fb.group({
      name: [this.project.name],
      description: [this.project.description],
      beginDate: [this.project.beginDate],
      endDate: [this.project.endDate],
      budget: [this.project.budget],
      typeDon: [this.project.typeDon],
      nameEnt: [this.project.nameEnt],
      pmName: [this.project.pmName],
      pmMail: [this.project.pmMail],
      category: [this.project.category],
      interet: [this.project.interet],
      count: [this.project.count]
    });
  }
  contribution(){
    console.log(this.projectEditForm.value.count)
    let montant = +this.projectEditForm.value.count;
    this.project.count += montant;
    this.ps.save(this.project).subscribe(
      res => {
        this.route.navigate(["/projects"])
      }
    );
  }
}

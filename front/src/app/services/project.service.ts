import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Project } from "../models/project";
import { Category } from "../models/category";

@Injectable({
    providedIn: 'root'
})
export class ProjectService{
    private projectsUrl : string ='http://localhost:8085/api/projects';

    constructor(private http: HttpClient) { }

    findAll(): Observable<Project[]>{
        return this.http.get<Project[]>(this.projectsUrl);
    }
    findById(id: number): Observable<Project>{
        return this.http.get<Project>(this.projectsUrl + '/' + id);
    }
    save(project: Project): Observable<Project>{
        return this.http.post<Project>(this.projectsUrl, project);
    }
    delete(id: number): Observable<Project>{
        return this.http.get<Project>(this.projectsUrl + '/' + id + '/delete');
    }
    findByCategory(category: Category): Observable<Project[]>{
        return this.http.get<Project[]>(this.projectsUrl + '/category/' + category.id);
    }

}
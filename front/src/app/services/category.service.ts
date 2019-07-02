import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "../models/category";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
  private categoriesUrl : string = 'http://localhost:8085/api/categories';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Category[]>{
    return this.http.get<Category[]>(this.categoriesUrl);
  }
  findById(id: number): Observable<Category>{
    return this.http.get<Category>(this.categoriesUrl + '/' + id);
  }
  save(category: Category): Observable<Category>{
    return this.http.post<Category>(this.categoriesUrl, category);
  }
  delete(id: number): Observable<Category>{
    return this.http.get<Category>(this.categoriesUrl + '/' + id + '/delete')
  }
}
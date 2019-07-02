import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TypeDon } from "../models/typeDon";

@Injectable({
    providedIn: 'root'
})
export class TypeDonService{
    private projectsUrl : string ='http://localhost:8085/api/typeDon';

    constructor(private http: HttpClient) { }

    findAll(): Observable<TypeDon[]>{
        return this.http.get<TypeDon[]>(this.projectsUrl);
    }
}
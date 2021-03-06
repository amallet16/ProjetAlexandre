import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8085/api/test/user';
  private pmUrl = 'http://localhost:8085/api/test/pm';
  private adminUrl = 'http://localhost:8085/api/test/admin';
  private url ='http://localhost:8085/api/test/currentUser/'

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
  findByUN(un :string) : Observable<User>{
    return this.http.get<User>(this.url+un);
  }
}

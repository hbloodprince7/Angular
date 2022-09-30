import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserDetails } from './UserDetails';
import { Observable } from 'rxjs';

// @CrossOrigin(origin="http://localhost:4200")
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private url: string = "https://localhost:7132/api/UserDetails";
  constructor(private http:HttpClient) {}
  getUserDetails(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>(this.url);
  }
}
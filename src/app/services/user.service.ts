import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable}from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  userName:string='Mehmet';
  lastName:string='Ekintaşlardanparlayanlar'
  private apiUrl='https://jsonplaceholder.typicode.com/';
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.apiUrl+'users');
  }
}

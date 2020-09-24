import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from '@angular/router';


@Injectable({
  providedIn: "root",
})

export class LoginPageService{
    constructor(private http:HttpClient, private router: Router){}

    loginUser(data):Observable<any>{
        return this.http.post('http://localhost:3000/user/login',data);
    }

    getToken() {
      return localStorage.getItem('token');
    }

    logoutUser() {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      this.router.navigate(['']);
      window.location.replace('/tabs/home');
    }

    getuserName():Observable<any>{
      return this.http.get('http://localhost:3000/user/name/'+localStorage.getItem('userId'));
    }

    getUserDetails():Observable<any>{
      return this.http.get('http://localhost:3000/user/'+localStorage.getItem('userId'));
    }

    deleteUser():Observable<any>{
      return this.http.delete('http://localhost:3000/user/deleteUser/'+localStorage.getItem('userId'));
    }
}
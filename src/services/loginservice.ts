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
      this.router.navigate(['']);
      window.location.reload();
    }
}
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class SignUpPageService{
    constructor(private http:HttpClient){}

    registeruser(data):Observable<any>{
        return this.http.post('https://ionic-server-app.herokuapp.com/user/signup',data);
    }

}
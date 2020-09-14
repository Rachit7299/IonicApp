import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class HomePageService{
    constructor(private http:HttpClient){}

    getcategories():Observable<any>{
        return this.http.get('http://localhost:3000/home/categories');
    }
    getfeaturedList():Observable<any>{
      return this.http.get('http://localhost:3000/home/featured');
  }
}
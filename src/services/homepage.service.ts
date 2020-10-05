import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class HomePageService{
    constructor(private http:HttpClient){}

    getcategories():Observable<any>{
        return this.http.get('https://ionic-server-app.herokuapp.com/home/categories');
    }
    getfeaturedList():Observable<any>{
      return this.http.get('https://ionic-server-app.herokuapp.com/home/featured');
  }
    gettopPicks():Observable<any>{
      return this.http.get('https://ionic-server-app.herokuapp.com/home/toppicks');
    }
    getcaraousel():Observable<any>{
      return this.http.get('https://ionic-server-app.herokuapp.com/home/caraousel');
    }
}
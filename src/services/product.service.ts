import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})

export class ProductService{
    constructor(private http: HttpClient){}

    getProductsAll():Observable<any>{
        return this.http.get('http://localhost:3000/products/products-all')
    }

    viewCart():Observable<any>{
        return this.http.get('http://localhost:3000/products/viewcart/'+localStorage.getItem('userId'));
    }

    delCart():Observable<any>{
        return this.http.delete('http://localhost:3000/products/del-all-cart/'+localStorage.getItem('userId'));
    }

    delProduct(_id:String):Observable<any>{
        return this.http.delete('http://localhost:3000/products/delcart/'+_id);
    }

    addCart(_id:String):Observable<any>{
        return this.http.post('http://localhost:3000/products/addcart/'+localStorage.getItem('userId')+'&'+_id,1);
    }
}



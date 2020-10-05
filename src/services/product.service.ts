import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})

export class ProductService{
    constructor(private http: HttpClient){}

    getProductsAll():Observable<any>{
        return this.http.get('https://ionic-server-app.herokuapp.com/products/products-all')
    }

    viewCart():Observable<any>{
        return this.http.get('https://ionic-server-app.herokuapp.com/products/viewcart/'+localStorage.getItem('userId'));
    }

    delCart():Observable<any>{
        return this.http.delete('https://ionic-server-app.herokuapp.com/products/del-all-cart/'+localStorage.getItem('userId'));
    }

    delProduct(_id:String):Observable<any>{
        return this.http.delete('https://ionic-server-app.herokuapp.com/products/delcart/'+_id);
    }

    addCart(_id:String):Observable<any>{
        return this.http.post('https://ionic-server-app.herokuapp.com/products/addcart/'+localStorage.getItem('userId')+'&'+_id,{id:localStorage.getItem('userId')});
    }

    getProduct(_id:String):Observable<any>{
        console.log(_id);
        return this.http.get('https://ionic-server-app.herokuapp.com/products/viewProduct/'+_id);
    }
    getOrders():Observable<any>{
        return this.http.get('https://ionic-server-app.herokuapp.com/user/orders/'+localStorage.getItem('userId'));
    }
    postOrders(data:any):Observable<any>{
        return this.http.post('https://ionic-server-app.herokuapp.com/user/orders/'+localStorage.getItem('userId'),data);
    }
}



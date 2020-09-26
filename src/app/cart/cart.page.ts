import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private apiService: ProductService) { }

  x=[1,2,3,4,5,6];
  cartItems;
  signedIn:boolean;

  ngOnInit() {
    let t = localStorage.getItem('token');
    if(t){
      this.signedIn=true;
      this.apiService.viewCart().subscribe(
        (response)=>{
          
          this.cartItems=response;
          console.log(this.cartItems)
        })
    }
    else{
      this.signedIn=false;
    }
  }

}

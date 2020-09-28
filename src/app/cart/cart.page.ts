import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private apiService: ProductService, private router: Router) { }

  x=[1,2,3,4,5,6];
  cartItems=[];
  signedIn:boolean;
  cartTotal:number;
  delFee;
  total;
  discount;
  isLoading;
  noItem;

  ngOnInit() {
    this.isLoading=true;
    this.noItem=false;
    let t = localStorage.getItem('token');
    if(t){
      this.signedIn=true;
      this.apiService.viewCart().subscribe(
        (response)=>{
          if(response!=null){
            this.cartItems=response.items;
            this.cartTotal=response.total;
            this.discount=Math.floor(this.cartTotal/10);
            if(this.cartTotal<200){
              this.delFee="$29";
              this.total=this.cartTotal-this.discount+29;
            }
            else{
              this.delFee="FREE"
              this.total=this.cartTotal-this.discount;
            }
          }
          else{
            this.noItem=true;
            this.cartItems=[];
            this.cartTotal=null;
            this.discount=null;
            this.delFee=null;
            this.total=null;
          }
          this.isLoading=false;
        },(err)=>{
          this.isLoading=false;
        })
    }
    else{
      this.signedIn=false;
      this.isLoading=false;
    }
  }

  deleteitem(_id){
    this.apiService.delProduct(_id).subscribe(
      (res)=>{
        console.log('Product Deleted!');
        this.ngOnInit();
      },(err)=>{
        if(err.status==200){
          console.log('Product Deleted!');
          this.ngOnInit();
        }
        else{
          console.log(err);
        }
      }
    )
  }

  delCart(){
    this.apiService.delCart().subscribe(
      (res)=>{
        console.log('Cart Empty');
        this.ngOnInit();
      },(err)=>{
        if(err.status==200){
          console.log('Product Deleted!');
          this.ngOnInit();
        }
        else{
          console.log(err);
        }
      }
    )
  }

  product(_id){    
    this.router.navigate(['/product'],{
      state:{id: _id}
    });
  }

}

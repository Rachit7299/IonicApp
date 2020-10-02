import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor(private apiService: ProductService, private router: Router) { }

  orderItems=[];
  signedIn:boolean;
  isLoading;
  noItem;

  ngOnInit() {
    this.isLoading=true;
    this.noItem=false;
    let t = localStorage.getItem('token');
    if(t){
      this.signedIn=true;
      this.apiService.getOrders().subscribe(
        (orders)=>{
          if(orders!=null){
            this.orderItems=orders;     
            console.log(this.orderItems);       
          }
          else{
            this.noItem=true;
          }
          this.isLoading=false;
        },(err)=>{
          console.log(err);
          this.isLoading=false;
        }
      )
    }
    else{
      this.signedIn=false;
    }
  }

  product(_id){    
    this.router.navigate(['/product'],{
      state:{id: _id}
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(private router: Router,private apiService: ProductService, public toastController: ToastController) { }

  prdtId;
  product;
  isLoading;

  async presentToast(x) {
    if(x=='200'){
      x='Added To Cart'
    }
    else{
      x="Error Adding to Cart"
    }
    const toast = await this.toastController.create({
      message: x,
      duration: 2000
    });
    toast.present();
  }


  ngOnInit() {
    this.isLoading=true;
    this.prdtId=this.router.getCurrentNavigation().extras.state;
    if(this.prdtId){
      console.log(this.prdtId);
      this.apiService.getProduct(this.prdtId.id).subscribe(
        (res)=>{
          this.product=res;
          console.log(this.product);
          this.isLoading=false;
        },(err)=>{
          console.log(err);
          this.isLoading=false;
        }
      )
    }
    else{
      this.isLoading=false;
    }    
  }

  addCart(){
    this.apiService.addCart(this.prdtId.id).subscribe(
      (res)=>{
        console.log("Added");
      },(err)=>{
        this.presentToast(err.status);
      }
    )
  }

}

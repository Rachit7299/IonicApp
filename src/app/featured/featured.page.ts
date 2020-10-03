import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-featured',
  templateUrl: './featured.page.html',
  styleUrls: ['./featured.page.scss'],
})
export class FeaturedPage implements OnInit {

  constructor( private apiservice: ProductService, private router: Router) { }
  x=[]
  ngOnInit() {
    this.apiservice.getProductsAll().subscribe(
      (data)=>{
        this.x=data;
      }
    )
  }

  product(_id){    
    this.router.navigate(['/product'],{
      state:{id: _id}
    });
  }

}

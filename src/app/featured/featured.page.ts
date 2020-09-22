import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.page.html',
  styleUrls: ['./featured.page.scss'],
})
export class FeaturedPage implements OnInit {

  constructor( private apiservice: ProductService) { }
  x=[]
  ngOnInit() {
    this.apiservice.getProductsAll().subscribe(
      (data)=>{
        this.x=data;
      }
    )
  }

}

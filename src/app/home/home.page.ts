import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective, NgForm } from "@angular/forms";
import { HomePageService} from '../../services/homepage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  results=[];

  categoryCardList=[
    { "title":"Women", "color_gradient":"linear-gradient(to left, rgba(255, 88, 88, 0.52), rgba(251, 88, 149, 0.73)),url('./assets/women.jpg')", "link":"/login"},
    { "title":"Men", "color_gradient":"linear-gradient(to right, rgba(67, 233, 123, 0.52), rgba(56, 249, 215, 0.73)),url('./assets/mens.jpg')", "link":"/login"},
    { "title":"Formal", "color_gradient":"linear-gradient(to right, rgba(121, 144, 221, 0.52), rgba(55, 74, 190, 0.73)),url('./assets/formal.jpg')", "link":"/login"},
    { "title":"Sports", "color_gradient":"linear-gradient(to right, rgba(218, 34, 255, 0.52), rgba(151, 51, 238, 0.73)),url('./assets/sportswear.jpg')", "link":"/login"},
    { "title":"Winter", "color_gradient":"linear-gradient(to left, rgba(254, 140, 0, 0.52), rgba(	248, 54, 0, 0.73)),url('./assets/winterwear.jpg')", "link":"/login"},
    { "title":"Footwear", "color_gradient":"linear-gradient(to right, rgba(17, 153, 142, 0.52), rgba(56, 239, 125, 0.73)),url('./assets/footwear.jpg')", "link":"/login"},
  ]

  feturedCardList=[
    { "title":"Women T-Shirt","image":"../../assets/womentshirt.png" },
    { "title":"Men T-Shirt","image":"../../assets/mentshirt.png" },
    { "title":"Shoes","image":"../../assets/shoes.jpg" },
    { "title":"Women T-Shirt","image":"../../assets/womentshirt_@.png" },
    { "title":"Men Shirt","image":"../../assets/menshirt.png" },
    { "title":"Jackets","image":"../../assets/jacket.jpg" },    
  ]

  constructor(private fb: FormBuilder, private apiService: HomePageService) { }

  searchForm= this.fb.group({
    search:['']
  })

  ngOnInit() {
    this.apiService.getcategories().subscribe(
      (data)=>{
        this.results=data;
      },(err)=>{
        console.log(err)
      });
  }

  Search(){
    console.log(this.searchForm.value);
  }

}

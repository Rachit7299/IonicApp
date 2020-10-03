import { Component, OnInit } from '@angular/core';
import { HomePageService} from '../../services/homepage.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor(private apiService: HomePageService) { }

  categories:[];

  ngOnInit() {
    this.apiService.getcategories().subscribe(
      (data)=>{
        this.categories=data;        
      },(err)=>{
        console.log(err)
      });
  }

}

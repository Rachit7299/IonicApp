import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { HomePageService} from '../../services/homepage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  currentImage: any;
  feturedCardList=[];
  caraouselList=[];

  constructor(public photoService: PhotoService, private apiService: HomePageService, private router: Router) {  }

  ngOnInit() {
    this.apiService.getfeaturedList().subscribe(
      (data)=>{
        this.feturedCardList=data;
      },(err)=>{
        console.log(err)
      });
      this.apiService.getcaraousel().subscribe(
        (data)=>{
          this.caraouselList=data;
        },(err)=>{
          console.log(err)
        });
  }

  product(_id){    
    this.router.navigate(['/product'],{
      state:{id: _id}
    });
  }
}
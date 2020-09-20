import { Component } from '@angular/core';
import { LoginPageService } from '../services/loginservice';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private LoginPageService: LoginPageService
  ) {
    this.initializeApp();
  }

  loggedIn:boolean;

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }

  ngOnInit() {
    let t = localStorage.getItem('token');
    if(t){
      this.loggedIn=true;
    }
    else{
      this.loggedIn=false;
    }
  }

  logout(){
    this.LoginPageService.logoutUser();
    
  }
}

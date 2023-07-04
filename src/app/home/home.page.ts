import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, private router:Router) {}

  public loaded = false;
  

  goToUser() {
    this.navCtrl.navigateForward(['/user'], { animated: false });
  }

  goToEditAccount() {
    this.navCtrl.navigateForward(['/edit-account'], { animated: false });
  }

  logOut() {
    this.navCtrl.navigateForward(['/login']);
  }

}

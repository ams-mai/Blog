import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  public loaded = false;

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateForward(['/home'], { animated: false });
  }

}

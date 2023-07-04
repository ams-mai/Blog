import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {

  constructor(public navCtrl: NavController, private popoverController: PopoverController) { }

  public loaded = false;

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateForward(['/home'], { animated: false });
  }

  async DismissClick() {
    await this.popoverController.dismiss();
      }

}



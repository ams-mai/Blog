import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router, private popoverController: PopoverController) { }

  ngOnInit() {
  }


  logMeIn() {
    this.router.navigate(['/home'])
  }

  async DismissClick() {
    await this.popoverController.dismiss();
      }

}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LikedQuery, LikedService } from 'src/app/stores/liked';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  constructor(
    private likedService: LikedService,
    public likedQuery: LikedQuery,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.likedService.getList();
  }

  goTo(profile) {
    this.navCtrl.navigateForward('business-info', {
      state: { profile },
    });
  }
}

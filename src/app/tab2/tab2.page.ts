import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PromotionQuery, PromotionService } from 'src/app/stores/promotion';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(
    private promotionService: PromotionService,
    public promotionQuery: PromotionQuery,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.promotionService.getList();
  }

  goTo(blog) {
    this.navCtrl.navigateForward('blog-details', {
      state: { blog },
    });
  }

}

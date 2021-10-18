import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AttractionService } from 'src/app/stores/attraction';
import { BlogQuery, BlogService } from 'src/app/stores/blog';
import { TulbaghService } from 'src/app/stores/tulbagh';
import { WeatherQuery, WeatherService } from 'src/app/stores/weather';
import { AttractionsPage } from 'src/app/pages/attractions/attractions.page';
import { WeatherPage } from 'src/app/pages/weather/weather.page';
import { BusinessSearchPage } from 'src/app/pages/business-search/business-search.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  categories = [
    { name: 'accomodations', items: [] },
    { name: 'wineries', items: [] },
  ];
  ready: boolean;
  constructor(
    private modalCtrl: ModalController,
    public weather: WeatherQuery,
    private attractions: AttractionService,
    private weatherService: WeatherService,
    private blogService: BlogService,
    public blogQuery: BlogQuery,
    private tulbaghService: TulbaghService
  ) {}
  ngOnInit() {
    this.attractions.getTop();
  }

  ionViewWillEnter() {
    this.weatherService.getToday();
    this.blogService.getList();
  }

  ionViewDidEnter() {
    this.ready = true;
  }

  async showAttractions() {
    this.attractions.getTop();
    const modal = await this.modalCtrl.create({
      component: AttractionsPage,
    });

    modal.present();
  }

  async showWeather() {
    const modal = await this.modalCtrl.create({
      component: WeatherPage,
    });

    modal.present();
  }

  async showAbout() {
    await this.tulbaghService.showAbout();
  }

  // async showSearch() {
  //   const modal = await this.modalCtrl.create({
  //     component: BusinessSearchPage,
  //     initialBreakpoint: 0.65,
  //     breakpoints: [0, 0.65, 1],
  //   });

  //   modal.onDidDismiss().then(({ data }) => {
  //     if (data) {
  //       this.goTo(data);
  //     }
  //   });

  //   return modal.present();
  // }

  // goTo(profile) {
  //   this.navCtrl.navigateForward('business-info', {
  //     state: { profile },
  //   });
  // }
}

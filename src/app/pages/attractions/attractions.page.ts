import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AttractionQuery } from 'src/app/stores/attraction';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.page.html',
  styleUrls: ['./attractions.page.scss'],
})
export class AttractionsPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    public attractions: AttractionQuery
  ) { }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

}

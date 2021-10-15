import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EventQuery, EventService } from 'src/app/stores/event';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(
    private eventService: EventService,
    public eventQuery: EventQuery,
    private navCtrl: NavController
  ) {}

  async ngOnInit() {
    await this.eventService.getList();
  }

  goTo(event) {
    this.navCtrl.navigateForward('event-details', {
      state: { event },
    });
  }
}

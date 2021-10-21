import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttractionsPageRoutingModule } from './attractions-routing.module';

import { AttractionsPage } from './attractions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttractionsPageRoutingModule
  ],
  declarations: [AttractionsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AttractionsPageModule {}

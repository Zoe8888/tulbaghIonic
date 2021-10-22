import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { BusinessInfoPageRoutingModule } from './business-info-routing.module';
import { BusinessInfoPage } from './business-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessInfoPageRoutingModule,
    SharedModule
  ],
  declarations: [BusinessInfoPage]
})
export class BusinessInfoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { IonicModule } from '@ionic/angular';

import { BlogDetailsPageRoutingModule } from './blog-details-routing.module';

import { BlogDetailsPage } from './blog-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogDetailsPageRoutingModule,
    SharedModule,
  ],
  declarations: [BlogDetailsPage]
})
export class BlogDetailsPageModule {}

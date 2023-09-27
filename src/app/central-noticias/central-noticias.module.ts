import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentralNoticiasPageRoutingModule } from './central-noticias-routing.module';

import { CentralNoticiasPage } from './central-noticias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentralNoticiasPageRoutingModule
  ],
  declarations: [CentralNoticiasPage]
})
export class CentralNoticiasPageModule {}

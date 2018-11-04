import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriaDonacionPage } from './categoria-donacion';

@NgModule({
  declarations: [
    CategoriaDonacionPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriaDonacionPage),
  ],
})
export class CategoriaDonacionPageModule {}

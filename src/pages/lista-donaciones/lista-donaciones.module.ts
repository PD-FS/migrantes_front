import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaDonacionesPage } from './lista-donaciones';

@NgModule({
  declarations: [
    ListaDonacionesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaDonacionesPage),
  ],
})
export class ListaDonacionesPageModule {}

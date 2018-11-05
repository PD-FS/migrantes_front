import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearNecesidadPage } from './crear-necesidad';

@NgModule({
  declarations: [
    CrearNecesidadPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearNecesidadPage),
  ],
})
export class CrearNecesidadPageModule {}

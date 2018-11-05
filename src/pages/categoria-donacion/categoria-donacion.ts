import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DonationKindProvider } from '../../providers/donation-kind/donation-kind';

/**
 * Generated class for the CategoriaDonacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoria-donacion',
  templateUrl: 'categoria-donacion.html',
})
export class CategoriaDonacionPage {

  tiposDonacion: ArrayBuffer;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public donationKindsProvider: DonationKindProvider
     ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaDonacionPage');
    this.donationKindsProvider.getDonationKinds().subscribe(
      (data) =>
      {
          this.tiposDonacion = data;
          console.log(JSON.stringify(data));
      },
      (error) => 
      {
        console.log(JSON.stringify(error));
      }
      );

  }

}

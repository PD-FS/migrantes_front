import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DonationKindProvider } from '../../providers/donation-kind/donation-kind';
import { GlobalUserProvider } from '../../providers/global-user/global-user';

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

  infoUsuario: any;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public donationKindsProvider: DonationKindProvider,
     public globalUserProvider: GlobalUserProvider
     ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaDonacionPage');
    this.globalUserProvider.getUser("1800212566").subscribe(
      (data) =>
      {
        console.log(JSON.stringify(data));
        this.infoUsuario = data;  
      },
      (error) => 
      {
        console.log(JSON.stringify(error));
      }
      );

    this.donationKindsProvider.getDonationKinds().subscribe(
      (data) =>
      {
          this.tiposDonacion = data;
      },
      (error) => 
      {
        console.log(JSON.stringify(error));
      }
      );

  }

}

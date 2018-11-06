import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the DonationKindProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DonationKindProvider {

  endpoint:string = "donation_kinds"
  constructor(
    public http: HttpClient,
    public api: Api
    ) {
    
  }

  getDonationKinds(params?: any) {
    return this.api.get(false, this.endpoint, [])   
  }

}

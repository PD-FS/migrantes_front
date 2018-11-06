import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the GlobalUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalUserProvider {
  
  endpoint:string = "users"
  
  constructor(
    public http: HttpClient,
    public api: Api
    ) {
      
  }
  
  getUser(id:string, params?: any) {
    return this.api.get(true, this.endpoint+"/"+id, [])
  }

}

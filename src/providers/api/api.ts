import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'https://secret-shore-80257.herokuapp.com';
  //url: string = 'http://localhost:3000';
  //urlGlobal: string = 'https://secret-shore-80257.herokuapp.com';
  urlGlobal: string = 'http://localhost:3000';


  constructor(public http: HttpClient) {
  }

  get(isGlobal:boolean, endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    if(isGlobal)
    {
      return this.http.get(this.urlGlobal + '/' + endpoint + ".json", reqOpts);
    }
    else
    {
      return this.http.get(this.url + '/' + endpoint + ".json", reqOpts);
    }
    
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }
}

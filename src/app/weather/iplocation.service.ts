import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class IpLocationService {
  private ipLocationApi = 'http://restapi.amap.com/v3/ip?key=935508db38fc2e0e2b86d50bf57b2f57'
  constructor (
    private http: Http
  ) { }

  getIplocation(): Promise<any> {
    return this.http.get(this.ipLocationApi)
      .toPromise();
  }
}


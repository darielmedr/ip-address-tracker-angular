import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import IpGeolocation from '../models/ip-geolocation';

@Injectable()
export class IpGeoApiService {

  baseUrl: string = 'http://ip-api.com/json';

  /**
   * numeric value (to save bandwidth)
   * that represent (fields=status,message,region,city,zip,lat,lon,offset,isp,query)
   * see https://ip-api.com/docs/api:json
   */
  fields: number | string = 33612532;

  constructor(private http: HttpClient) { }

  public getClientIpGeolocationInfo(): Observable<IpGeolocation> {
    return this.http.get<IpGeolocation>(`${this.baseUrl}/?fields=${this.fields}`).pipe(
      map((data: any) => {
        return this.mapApiResponseToIpGeolocation(data);
      })
    );
  }

  public getIpGeolocationInfo(ip: string): Observable<IpGeolocation> {
    return this.http.get<IpGeolocation>(`${this.baseUrl}/${ip}?fields=${this.fields}`).pipe(
      map((data: any) => {
        return this.mapApiResponseToIpGeolocation(data);
      })
    );
  }

  private mapApiResponseToIpGeolocation(data: any): IpGeolocation {
    return {
      ip: data.query,
      status: data.status,
      errorMessage: data.message,
      location: `${data.city}, ${data.region} ${data.zip}`,
      timezone: data.offset,
      isp: data.isp,
      coord: {
        lat: data.lat,
        lon: data.lon
      }
    };
  }
}

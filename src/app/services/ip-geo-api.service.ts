import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import IpGeolocation from '../models/ip-geolocation';
import { environment } from '../../environments/environment';

@Injectable()
export class IpGeoApiService {

  baseUrl: string = 'https://geo.ipify.org/api/v1';
  apiKey: string = environment.ipifyApKey;

  constructor(private http: HttpClient) { }

  public getClientIpGeolocationInfo(): Observable<IpGeolocation> {
    return this.http.get<IpGeolocation>(`${this.baseUrl}/?apiKey=${this.apiKey}`).pipe(
      map((data: any) => {
        return this.mapApiResponseToIpGeolocation(data);
      })
    );
  }

  public getIpGeolocationInfo(ip: string): Observable<IpGeolocation> {
    return this.http.get<IpGeolocation>(`${this.baseUrl}/?apiKey=${this.apiKey}&ipAddress=${ip}`).pipe(
      map((data: any) => {
        return this.mapApiResponseToIpGeolocation(data);
      })
    );
  }

  private mapApiResponseToIpGeolocation(data: any): IpGeolocation {
    return {
      ip: data.ip,
      location: `${data.location.city}, ${data.location.region} ${data.location.postalCode}`,
      timezone: `UTC ${data.location.timezone}`,
      isp: data.isp,
      coord: {
        lat: data.location.lat,
        lon: data.location.lng
      }
    };
  }
}

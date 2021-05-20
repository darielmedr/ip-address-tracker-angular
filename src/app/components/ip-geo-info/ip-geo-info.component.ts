import { Component, Input, OnInit } from '@angular/core';
import IpGeolocation from 'src/app/models/ip-geolocation';

@Component({
  selector: 'app-ip-geo-info',
  templateUrl: './ip-geo-info.component.html',
  styleUrls: ['./ip-geo-info.component.scss']
})
export class IpGeoInfoComponent implements OnInit {

  @Input()
  public ipGeoInfo: IpGeolocation | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}

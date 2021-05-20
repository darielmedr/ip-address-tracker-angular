import { formatNumber } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { latLng, MapOptions, tileLayer, Map, icon, marker, MarkerOptions, Icon } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {

  @Input()
  public coords: { lat: number, lon: number } | undefined = { lat: 0, lon: 0 };

  private readonly DEFAULT_ZOOM: number = 12;
  map!: Map;
  mapOptions!: MapOptions;
  positionMarkerLayer: any;

  constructor() { }

  ngOnInit(): void {
    this.initializeMapOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change: SimpleChange = changes['coords'];
    if (!change.isFirstChange()) {
      this.updateLocationMarker(this.DEFAULT_ZOOM);
    }
  }

  private initializeMapOptions(): void {
    this.mapOptions = {
      zoomControl: false,
      zoom: this.DEFAULT_ZOOM,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: '© OpenStreetMap'
          })
      ],
    };
  }
  public initializeMap(map: Map): void {
    this.map = map;
    this.updateLocationMarker();
  }

  private updateLocationMarker(zoom?: number): void {
    this.clearMarkerLayer();
    const coordinates = latLng([
      this.coords ? this.coords.lat : 0,
      this.coords ? this.coords.lon : 0
    ]);
    const options: MarkerOptions = this.getDefaultMarkerOptions();
    this.positionMarkerLayer = marker(coordinates, options).addTo(this.map);
    const zoomValue: number = zoom ? zoom : this.map.getZoom();
    this.map.setView(coordinates, zoomValue);
  }
  private clearMarkerLayer(): void {
    if (this.map.hasLayer(this.positionMarkerLayer)) {
      this.map.removeLayer(this.positionMarkerLayer);
    }
  }
  private getDefaultMarkerOptions(): MarkerOptions {
    const options: MarkerOptions = {
      icon: this.getDefaultMarkerIcon(),
      title: `Latitude: ${formatNumber(this.coords ? this.coords.lat : 0, 'en-US', '1.1-7')}\nLongitude: ${formatNumber(this.coords ? this.coords.lon : 0, 'en-US', '1.1-7')}`,
      riseOnHover: true
    };
    return options;
  }
  private getDefaultMarkerIcon(): Icon {
    return icon({
      iconSize: [55, 55],
      iconAnchor: [55, 55],
      iconUrl: 'assets/images/icon-location.svg'
    });
  }
}

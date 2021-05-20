import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GmtToUtcPipe } from './pipes/gmt-to-utc.pipe';
import { IpGeoApiService } from './services/ip-geo-api.service';
import { IpGeoInfoComponent } from './components/ip-geo-info/ip-geo-info.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    GmtToUtcPipe,
    IpGeoInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    LeafletModule
  ],
  providers: [IpGeoApiService, GmtToUtcPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

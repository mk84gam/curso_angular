import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchByCapitalComponent } from './search-by-capital/search-by-capital.component';
import { SearchByCountryComponent } from './search-by-country/search-by-country.component';
import { SearchByRegionComponent } from './search-by-region/search-by-region.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchByCapitalComponent,
    SearchByCountryComponent,
    SearchByRegionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

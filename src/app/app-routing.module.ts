import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchByCapitalComponent } from './search-by-capital/search-by-capital.component';
import { SearchByCountryComponent } from './search-by-country/search-by-country.component';
import { SearchByRegionComponent } from './search-by-region/search-by-region.component';

const routes: Routes = [
  {path:"byCapital", component: SearchByCapitalComponent},
  {path:"byCountry", component: SearchByCountryComponent},
  {path:"byRegion", component: SearchByRegionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { Country } from './country.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  //https://restcountries.com/v3.1/all
  //https://restcountries.com/v3.1/name/{mex}
  //https://restcountries.com/v3.1/capital/{capital}
  //https://restcountries.com/v3.1/region/{region}
  
  private urlAPI_ByCapital:string = "https://restcountries.com/v3.1/capital/";
  private urlAPI_ByCountry:string = "https://restcountries.com/v3.1/name/";
  private urlAPI_ByRegion:string = "https://restcountries.com/v3.1/region/";

  /*Injecting httpClient*/
  constructor(private http:HttpClient){ }

  getCountriesByCapital(value:string):Observable<Country[]>{
    return this.http
    .get<any[]>(this.urlAPI_ByCapital+value)
    .pipe(timeout(3500),
    map(jsonList=>jsonList.map(json=>new Country(
      json.cca3,
      json.flags,
      json.name,
      json.capital,
      json.population,
      json.translations
      ))));
  }

  getCountriesByCountry(value:string):Observable<Country[]>{
    return this.http
    .get<any[]>(this.urlAPI_ByCountry+value)
    .pipe(timeout(3500),
    map(jsonList=>jsonList.map(json=>new Country(
      json.cca3,
      json.flags,
      json.name,
      json.capital,
      json.population,
      json.translations
      ))));
  }

  getCountriesByRegion(value:string):Observable<Country[]>{
    return this.http
    .get<any[]>(this.urlAPI_ByRegion+value)
    .pipe(timeout(3500),
    map(jsonList=>jsonList.map(json=>new Country(
      json.cca3,
      json.flags,
      json.name,
      json.capital,
      json.population,
      json.translations
      ))));
  }
}

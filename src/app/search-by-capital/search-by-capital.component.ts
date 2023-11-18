import { Component } from '@angular/core';
import { Country } from '../services/country.class';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-search-by-capital',
  templateUrl: './search-by-capital.component.html',
  styleUrls: ['./search-by-capital.component.css']
})
export class SearchByCapitalComponent {
  data_search: string = "";
  countries:Country[]=[];

  private _info_cca3:string = "";
  private _info_flag:string = "";
  private _info_country_name:string = "";
  private _info_capital:string = "";
  private _info_population:number = 0;
  private _info_translations:string[] = [];
  private _flag_error:boolean = false;
  private _show_table:boolean = false;
  

  onTypeValue(value:string):void{
    this.data_search=value;
  }

  onClickSearchByCapital():void{
    this.countries = [];
    this._flag_error = false;
    this._show_table = false;
    this.service.getCountriesByCapital(this.data_search).subscribe({
      next: value=>{this.countries=value; this._show_table = true;},
      error: err=>{
        console.log("Error with the service: " + err);
        this._flag_error = true;
      }
    });
  }

  onClickDetail(cca3:string, flag:string, country_name:string, capital:string, population:number, translations:string):void{
    this._info_cca3 = cca3;
    this._info_flag = flag;
    this._info_country_name = country_name;
    this._info_capital = capital;
    this._info_population = population;
    this._info_translations = this.getTranslations(translations);
  }

  getTranslations(s_translations:string):string[]{
    //console.log(JSON.stringify(s_translations));

    let array_translations:string[] = [];
    let tmp_translations = (JSON.stringify(s_translations)).split('"');
    let flag_repeat:boolean;

    for(let i=5; i<tmp_translations.length; i+=10){
      //console.log(tmp_translations[i]);
      flag_repeat = false;
      for(let j=0; j<=array_translations.length;j++){
        if(array_translations[j] == tmp_translations[i]){
          flag_repeat = true;
        }
      }
      if(!flag_repeat){
        array_translations.push(tmp_translations[i]);
      }
    }
    return array_translations;
  }


  constructor(private service:CountriesService){
  }

  get info_cca3():string{
    return this._info_cca3;
  }
  get info_flag():string{
    return this._info_flag;
  }
  get info_country_name():string{
    return this._info_country_name;
  }
  get info_capital():string{
    return this._info_capital;
  }
  get info_population():number{
    return this._info_population;
  }

  get info_translations():string[]{
    return this._info_translations;
  }

  get flag_error():boolean{
    return this._flag_error;
  }

  get show_table():boolean{
    return this._show_table;
  }
}


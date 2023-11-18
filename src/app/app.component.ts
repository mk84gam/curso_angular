import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final_project_v2';
  private _enable_button_1:boolean=false;
  private _enable_button_2:boolean=false;
  private _enable_button_3:boolean=false;
  private _title_Sidebar:string="Search";

  private _titleByCapital:string="By Capital";
  private _titleByCountry:string="By Country";
  private _titleByRegion:string="By Region";

  enableButton(option:number):void{
    switch(option){
      case 1:
        this._enable_button_1 = true;
        this._enable_button_2 = false;
        this._enable_button_3 = false;
        this._title_Sidebar=this._titleByCapital;
      break;
      case 2:
        this._enable_button_1 = false;
        this._enable_button_2 = true;
        this._enable_button_3 = false;
        this._title_Sidebar=this._titleByCountry;
      break;
      case 3:
        this._enable_button_1 = false;
        this._enable_button_2 = false;
        this._enable_button_3 = true;
        this._title_Sidebar=this._titleByRegion;
      break;
      default:
        break;
    }
  }

  get enable_button_1():boolean{
    return this._enable_button_1;
  }
  get enable_button_2():boolean{
    return this._enable_button_2;
  }

  get enable_button_3():boolean{
    return this._enable_button_3;
  }

  get title_Sidebar():string{
    return this._title_Sidebar;
  }

  get titleByCapital():string{
    return this._titleByCapital;
  }

  get titleByRegion():string{
    return this._titleByRegion;
  }

  get titleByCountry():string{
    return this._titleByCountry;
  }

}

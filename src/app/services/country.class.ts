export class Country{
    private _cca3:string;
    private _flags:Flags;
    private _name:Name;
    private _capital:string[];
    private _population:number;
    //private _translations:Translations;
    private _translations:any;

    constructor(cca3:string, flags:Flags, name:Name, capital:string[], population:number, traslations:any){
        this._cca3 = cca3;
        this._flags = flags;
        this._name = name;
        this._capital = capital;
        this._population = population;
        this._translations = traslations;
    }

    public get cca3():string{return this._cca3;}
    public get flags():Flags{return this._flags;}
    public get name():Name{return this._name;}
    public get capital():string[]{return this._capital;}
    public get population():number{return this._population;}
    //public get translations():Translations{return this._translations;}
    public get translations():any{return this._translations;}
    
}

class Flags{
    private _png:string;

    constructor(png:string){
        this._png = png;
    }
    public get png():string{return this._png;}
}

class Name{
    private _common:string;

    constructor(common:string){
        this._common = common;
    }
    public get common():string{return this._common;}
}

class Translations{
    private _translations_trans:Translations_trans[];
    constructor(translations_trans:Translations_content_interface[]){
        this._translations_trans = translations_trans;
    }
    public get translations_trans():Translations_content_interface[]{return this._translations_trans;}
}

interface Translations_content_interface{
    _common:string;
    get common():string;
}

class Translations_trans implements Translations_content_interface{
    public _common:string;
    constructor(common:string){
        this._common = common;
    }
    public get common():string{return this._common;}
}

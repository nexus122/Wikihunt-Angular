import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HuntingService {
  name:string;
  constructor( private http: HttpClient ) { 
    console.log(" Servidor de scraping listo ! ");

  }

  getRandom( name:string ){            

    console.log("Funcion que busca una pagina aleatoria de wikipedia");

    var data = "Especial:Aleatoria";
    var leng = "es";
    var winer = name;

    const url = `https://hitler-s-hunt.herokuapp.com/peticion/?data=${data}&&leng=${leng}&&winer=${winer}`;          

    return this.http.get(url); 
  }

}

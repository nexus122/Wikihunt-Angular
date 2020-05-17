import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HuntingService {
  name: string;
  test: any[];

  constructor(private http: HttpClient) {
    console.log(" Servidor de scraping listo ! ");
  }

  getRandom(name: string) {

    console.log("Funcion que busca una pagina aleatoria de wikipedia");

    var data = "/wiki/Especial:Aleatoria";
    var leng = "es";
    var winer = name;

    const url = `https://hitler-s-hunt.herokuapp.com/peticion/?data=${data}&&leng=${leng}&&winer=${winer}`;

    return this.http.get(url);
  }

  getPage(link, name, enlace) {

    console.log("Funcion que busca una pagina concreta de wikipedia");
    console.log("Link: ", link);

    const removeAccents = (str) => {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    var link = removeAccents("/wiki/" + link);
    var data = link;
    var leng = "es";
    var winer = name;

    const url = `https://hitler-s-hunt.herokuapp.com/peticion/?data=${data}&&leng=${leng}&&winer=${winer}`;

    return this.http.get(url);
  }

}

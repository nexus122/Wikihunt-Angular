import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HuntingService {
  name:string;
  constructor( private httpClient: HttpClient ) { 
    console.log(" Servidor de scraping listo ! ");

  }

  getRandom( name:string ){    
    
    console.log("Funcion que busca una pagina aleatoria de wikipedia");

    

    const url = `https://hitler-s-hunt.herokuapp.com/enviar`;          

    return this.httpClient.post(url,{
      data:"/wiki/Especial:Aleatoria/",
      leng:"es",
      winer:"Adolf Hitler"
    } ).toPromise().then(data =>{
      console.log("data: ",data);
    });    


  }

}

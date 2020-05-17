import { Component, OnInit } from '@angular/core';
import { PersonajesService } from "../../services/people.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PersonajesService]
})
export class HomeComponent implements OnInit {

  constructor(private _personajesService: PersonajesService) {
    this.personaje = this._personajesService.getPersonajes();console.log("Personajes: ",this.personaje);
    this.length = this.personaje.length;console.log("Largo: ",this.length)    
    
    
    this.actualPJ();
  }
  length: number;
  slide:number = 0;
  name:string;
  description:string;
  img:string;
  personaje: any;

  ngOnInit() {
  }

  actualPJ(){
    this.name = this.personaje[this.slide].name;
    this.description = this.personaje[this.slide].desciption;
    this.img = this.personaje[this.slide].img
  }

  next(){
    console.log("next");
    if(this.slide < this.length-1){
      this.slide = this.slide+1
      this.actualPJ();
      console.log(this.name);
      console.log("Nombre: ", this.name, " Slide: ", this.slide);
    }else{
      this.slide = 0;
      this.actualPJ();
      console.log(this.name); 
      console.log("Nombre: ", this.name, " Slide: ", this.slide);     
    }
  }

  back(){
    console.log("back");
    if(this.slide > 0){
      this.slide = this.slide-1
      this.actualPJ();
      console.log(this.name);
      console.log("Nombre: ", this.name, " Slide: ", this.slide);
    }else{
      this.slide = this.length-1;
      this.actualPJ();
      console.log("Nombre: ", this.name, " Slide: ", this.slide);      
    }
  }

}

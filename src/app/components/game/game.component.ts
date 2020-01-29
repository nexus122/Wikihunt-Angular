import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HuntingService } from "../../services/hunting.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  name:string;
  links:any[] = [];
  nombres:any[] = [];
  index:number = 0;
  constructor( private route:ActivatedRoute,
               private huntingService:HuntingService
             ) { 

    this.route.params.subscribe(params=>{
      this.name = params.name;      
    })

    this.huntingService.getRandom( this.name ).subscribe(data =>{
      console.log(data);   
      this.nombres = data[0];
      this.links = data[1];  
  })

   }

  ngOnInit() {
  }

}

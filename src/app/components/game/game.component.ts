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
  data:any[] = [];
  constructor( private route:ActivatedRoute,
               private huntingService:HuntingService
             ) { 

    this.route.params.subscribe(params=>{
      this.name = params.name;      
    })

    var data = huntingService.getRandom( this.name );          
    console.log(data);

   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  name:string;
  constructor( private route:ActivatedRoute ) { 

    this.route.params.subscribe(params=>{
      this.name = params.name;      
    })

   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css']
})
export class WinComponent implements OnInit {
  name:string;
  pasos:string;
  constructor(private router:Router,
              private route: ActivatedRoute
  ) { 
    this.route.params.subscribe(params => {
      this.name = params.name;
      this.pasos = params.cont;
    })
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HuntingService } from "../../services/hunting.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  name: string;
  title: string;
  links: any[] = [];
  nombres: any[] = [];
  index: number = 0;
  constructor(private route: ActivatedRoute,
    private huntingService: HuntingService
  ) {

    this.route.params.subscribe(params => {
      this.name = params.name;
    })

    /* Al cargar la pagina se busca una pagina aleatoria */
    this.huntingService.getRandom(this.name).subscribe(data => {
      console.log(data);
      this.nombres = data[0];
      this.links = data[1];
      this.title = data[2];
    })

  }

  ngOnInit() {
  }

  getPage(link: string, name:string) {
    /* Buscamos una pagina concreta */
    this.huntingService.getPage(link, name).subscribe(data => {
      console.log(data);
      this.nombres = data[0];
      this.links = data[1];
      this.title = data[2];
    })
  }
}

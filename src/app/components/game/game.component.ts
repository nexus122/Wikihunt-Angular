import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HuntingService } from "../../services/hunting.service";
import {Router} from '@angular/router';

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
  loading: boolean;
  alert: boolean;
  cont: number = 0;
  constructor(private route: ActivatedRoute,
    private huntingService: HuntingService,
    private router:Router
  ) {

    this.route.params.subscribe(params => {
      this.name = params.name;
    })

    this.alert = false;
    this.loading = true;

    /* Al cargar la pagina se busca una pagina aleatoria */
    this.huntingService.getRandom(this.name).subscribe(data => {
      console.log(data);
      this.nombres = data[0];
      this.links = data[1];
      this.title = data[2];
      this.loading = false;
    })
  }

  ngOnInit() {
  }

  getPage(link: string, name: string, enlace: string) {
    this.loading = true;    
    /* Buscamos una pagina concreta */
    this.huntingService.getPage(link, name, enlace).subscribe(data => {

      console.log(data);
      this.nombres = data[0];
      this.links = data[1];
      this.title = data[2];
      this.loading = false;
      this.alert = false;
      this.cont = this.cont+1; //Sumamos uno al contador general
    }, error => {
      if(error.status == 200){
        if(error.error.text == "WIN"){
          console.log(" Has ganado ! ");
          this.router.navigate(['win/'+this.name+"/"+this.cont]);
        }
      }else{
        console.error('There was an error!', error);
        this.loading = false;
        this.alert = true;
      }
    })
  }

}

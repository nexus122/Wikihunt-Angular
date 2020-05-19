import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let GameComponent = class GameComponent {
    constructor(route, huntingService, router) {
        this.route = route;
        this.huntingService = huntingService;
        this.router = router;
        this.links = [];
        this.nombres = [];
        this.index = 0;
        this.cont = 0;
        this.route.params.subscribe(params => {
            this.name = params.name;
        });
        this.alert = false;
        this.loading = true;
        /* Al cargar la pagina se busca una pagina aleatoria */
        this.huntingService.getRandom(this.name).subscribe(data => {
            console.log(data);
            this.nombres = data[0];
            this.links = data[1];
            this.title = data[2];
            this.loading = false;
        });
    }
    ngOnInit() {
    }
    getPage(link, name, enlace) {
        this.loading = true;
        /* Buscamos una pagina concreta */
        this.huntingService.getPage(link, name, enlace).subscribe(data => {
            console.log(data);
            this.nombres = data[0];
            this.links = data[1];
            this.title = data[2];
            this.loading = false;
            this.alert = false;
            this.cont = this.cont + 1; //Sumamos uno al contador general
        }, error => {
            if (error.status == 200) {
                if (error.error.text == "WIN") {
                    console.log(" Has ganado ! ");
                    this.router.navigate(['win/' + this.name + "/" + this.cont]);
                }
            }
            else {
                console.error('There was an error!', error);
                this.loading = false;
                this.alert = true;
            }
        });
    }
};
GameComponent = tslib_1.__decorate([
    Component({
        selector: 'app-game',
        templateUrl: './game.component.html',
        styleUrls: ['./game.component.css']
    })
], GameComponent);
export { GameComponent };
//# sourceMappingURL=game.component.js.map
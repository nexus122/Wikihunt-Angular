import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PersonajesService } from "../../services/people.service";
let HomeComponent = class HomeComponent {
    constructor(_personajesService) {
        this._personajesService = _personajesService;
        this.slide = 0;
        this.personaje = this._personajesService.getPersonajes();
        console.log("Personajes: ", this.personaje);
        this.length = this.personaje.length;
        console.log("Largo: ", this.length);
        this.actualPJ();
    }
    ngOnInit() {
    }
    actualPJ() {
        this.name = this.personaje[this.slide].name;
        this.description = this.personaje[this.slide].desciption.slice(0, 200) + "...";
        this.img = this.personaje[this.slide].img;
        this.wiki = this.personaje[this.slide].wiki;
    }
    next() {
        console.log("next");
        if (this.slide < this.length - 1) {
            this.slide = this.slide + 1;
            this.actualPJ();
            console.log(this.name);
            console.log("Nombre: ", this.name, " Slide: ", this.slide);
        }
        else {
            this.slide = 0;
            this.actualPJ();
            console.log(this.name);
            console.log("Nombre: ", this.name, " Slide: ", this.slide);
        }
    }
    back() {
        console.log("back");
        if (this.slide > 0) {
            this.slide = this.slide - 1;
            this.actualPJ();
            console.log(this.name);
            console.log("Nombre: ", this.name, " Slide: ", this.slide);
        }
        else {
            this.slide = this.length - 1;
            this.actualPJ();
            console.log("Nombre: ", this.name, " Slide: ", this.slide);
        }
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
        providers: [PersonajesService]
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map
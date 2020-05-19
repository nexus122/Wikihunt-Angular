import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { InstructionsComponent } from "./components/instructions/instructions.component";
import { GameComponent } from "./components/game/game.component";
import { WinComponent } from "./components/win/win/win.component";
const routes = [
    { path: 'game/:name', component: GameComponent },
    { path: 'instructions/:name', component: InstructionsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'win/:name/:cont', component: WinComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', component: HomeComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
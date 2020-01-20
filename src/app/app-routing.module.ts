import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { InstructionsComponent } from "./components/instructions/instructions.component";
import { GameComponent } from "./components/game/game.component";


const routes: Routes = [  
  {path: 'game/:name', component: GameComponent},
  {path: 'instructions/:name', component: InstructionsComponent},
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

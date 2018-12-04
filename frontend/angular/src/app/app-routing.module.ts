import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MonstersComponent} from './monsters/monsters.component';
import {HabitatsComponent} from './habitats/habitats.component';
import {LivesComponent} from './lives/lives.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'monsters', component: MonstersComponent},
  {path: 'habitats', component: HabitatsComponent},
  {path: 'lives', component: LivesComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

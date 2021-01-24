import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './pages/players/players.component';
import { RegisterPlayersComponent } from './pages/register-players/register-players.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:'players', component: PlayersComponent},
      {path:'register', component: RegisterPlayersComponent},
      {path:'**', redirectTo:'players'}
      
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NbaRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbaRoutingModule } from './nba-routing.module';
import { PlayersComponent } from './pages/players/players.component';
import { RegisterPlayersComponent } from './pages/register-players/register-players.component';


@NgModule({
  declarations: [PlayersComponent, RegisterPlayersComponent],
  imports: [
    CommonModule,
    NbaRoutingModule
  ]
})
export class NbaModule { }

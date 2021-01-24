import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NbaRoutingModule } from './nba-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';

import { PlayersComponent } from './pages/players/players.component';
import { RegisterPlayersComponent } from './pages/register-players/register-players.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PlayersService } from './services/players.service';



@NgModule({
  declarations: [PlayersComponent, RegisterPlayersComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    NbaRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule,
    MatStepperModule,
    MatSelectModule
   
    
  ]
  ,  providers: [PlayersService],

})
export class NbaModule { }

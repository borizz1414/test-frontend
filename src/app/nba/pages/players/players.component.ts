import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlayersService } from '../../services/players.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class PlayersComponent {
  dataSource;
  expandedElement: null;
  displayedColumns = ['Color', 'ID', 'Nombre', 'Apellido', 'Altura pulgadas', 'Altura pies', 'Peso', 'Posicion'];
  search: string = "";
  count: number;
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  filterForm: FormGroup;
  constructor(private fb: FormBuilder,
    private _nba: PlayersService

  ) {
    this.buildForm();
    this.getPlayers();

  }


  ngOnInit(): void {

  }
  listPlayers(players) {
    this.dataSource = new MatTableDataSource(players)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getPlayers() {
    this._nba.getPlayers().subscribe((resp: any) => {
      this.count = resp.data.length;
      console.log(this.count)
      this.listPlayers(resp.data);
      const rows = [];
      resp.data.forEach(element => rows.push(element, { detailRow: true, element }));

      console.log(this.dataSource)




    })
  }
  getPlayerSearch() {
    if (this.search === "") {
      return this.getPlayers();
    }
    this._nba.getPlayerSearch(this.search).subscribe((resp: any) => {
      this.count = resp.data.length;
      console.log(this.count)
      this.listPlayers(resp.data);
      // console.log(resp.data)




    })
  }


  private buildForm() {
    this.filterForm = this.fb.group({
      search: [''],

    });
    this.filterForm.valueChanges

      .subscribe(value => {
        this.search = value.search;
        this.getPlayerSearch()
        console.log(this.search)
      });

  }

  infoTeam(e) {
    console.log(e)
  }
}



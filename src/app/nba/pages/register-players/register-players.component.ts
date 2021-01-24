import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-register-players',
  templateUrl: './register-players.component.html',
  styleUrls: ['./register-players.component.css']
})
export class RegisterPlayersComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  position = new FormControl();
  verify: boolean;
  toppingList: string[] = ['A', 'B', 'C', 'D', 'E'];
  displayedColumns = ['Abreviacion', 'Conferencia', 'Comentarios', 'Nombre equipo', 'Ciudad'];
  dataSource = [];
  age: any;
  date: any;
  select: any = ['C'];
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._fb.group({
      first_name: ['', [Validators.required, Validators.pattern(/^[a-z]/), Validators.minLength(3), Validators.maxLength(20)]],
      last_name: ['', [Validators.required, Validators.pattern(/^[a-z]/), Validators.minLength(3), Validators.maxLength(20)]],
      height_feet: ['', Validators.pattern(/^[0-9]+([,])?([0-9]+)?$/)],
      height_inches: ['', Validators.pattern(/^[0-9]+([,])?([0-9]+)?$/)],
      weight_pounds: ['', Validators.pattern(/^[0-9]+([,])?([0-9]+)?$/)],
      position: ['', Validators.required],
      date: ['', Validators.required],
      age: [this.age, Validators.required],
      comments: ['', Validators.required],
      time_position: ['', [Validators.required, Validators.pattern(/^[0-9]/)]],
    });

    this.secondFormGroup = this._fb.group({
      abbreviation: ['', Validators.required],
      conference: ['', Validators.required],
      comments_player: ['', Validators.required],
      name_team: ['', Validators.required],
      city: ['', Validators.required],
    });
  }
  getAge(r) {
    const today: Date = new Date();
    const birthDate: Date = new Date(this.date);
    this.age = today.getFullYear() - birthDate.getFullYear();
    const month: number = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      this.age--;
    }

    this.firstFormGroup.controls['age'].setValue(this.age)

  }
  addForm() {
    console.log(this.select)
    if (this.select.length > 0) {
      this.verify = true;
    } else {
      this.verify = false;
    }

  }
  add(e) {
    // this.dataSource = new MatTableDataSource(e);
    console.log(e)
    this.dataSource.push(e);
    let a = this.dataSource.map(a => {
      console.log(a)
    })
    console.log(a)
  }

}

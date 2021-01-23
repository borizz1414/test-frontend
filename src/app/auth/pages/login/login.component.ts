import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from '../../components/dialogs/dialogs.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  
  constructor(private fb:FormBuilder,
    public dialog: MatDialog) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }
  save(e) {
    const dialogRef = this.dialog.open(DialogsComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.form.reset()
    });
  }
  private buildForm() {
    this.form = this.fb.group({
      username: ['', [Validators.required,Validators.pattern(/^[a-z]/) ] ],
      password: [ '',  [ Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&][^'\s]/) ] ],
      checkbox: ['', [Validators.required]],
    });
    this.form.valueChanges

.subscribe(value => {
  console.log(value);
});
    
  }
  

}

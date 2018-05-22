import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogSectionComponent } from '../dialog-section/dialog-section.component';


@Component({
  selector: 'app-register-visitor',
  templateUrl: './register-visitor.component.html',
  styleUrls: ['./register-visitor.component.css']
})
export class RegisterVisitorComponent implements OnInit {
  
  relation = [
    {value: 'Company', viewValue: 'Company'},
    {value: 'Relation', viewValue: 'Relation'}
    
  ];
  
  constructor(
    public dialog:MatDialog
  
  
  ) { }

  ngOnInit() {
  }


  animal: string;
  name: string;

  

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogSectionComponent, {
      width: '300px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }






}





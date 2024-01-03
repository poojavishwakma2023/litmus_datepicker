// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-modal',
//   templateUrl: './modal.component.html',
//   styleUrls: ['./modal.component.css']
// })
// // export class ModalComponent {

// // }


import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  animal!: string;
  name!: string;

  constructor(public dialog: MatDialog) {}

  

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '100px',
      height:'310px',
      backdropClass: 'background-color:red',
      data: {name: this.name, animal: this.animal}
    });

    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.animal = result;
    });
  }

}


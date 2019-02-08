import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Gift } from '../shared/gift.model';
@Component({
  selector: 'app-gift-dialog',
  templateUrl: './gift-dialog.component.html',
  styleUrls: ['./gift-dialog.component.css']
})
export class GiftDialogComponent implements OnInit  {

  constructor(
    public dialogRef: MatDialogRef<GiftDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Gift) {}
    ngOnInit(){
      console.log(this.data);
    }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TambahDataComponent } from '../tambah-data/tambah-data.component';
import {ApiService} from '../api.service'; 

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(
    public dialog:MatDialog,
    public api:ApiService ) { 
      this.getData(); 
    }
    dataStock:any=[];
  getData()
  {
    this.api.baca().subscribe(res=>{
      this.dataStock=res;
    })
	}

  ngOnInit(): void {
  }
  tambahStock() {
    const dialogRef = this.dialog.open(TambahDataComponent, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog ditutup');
    });
  }
}
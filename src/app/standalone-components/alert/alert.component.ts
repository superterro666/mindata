import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatButtonModule, MatButton } from '@angular/material/button';



@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule ],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  
})
export class AlertComponent implements OnInit {
  @Output() deleteEmit: EventEmitter<boolean> = new EventEmitter();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
    
    openDialog(): void {
        const dialogRef = this.dialog.open(DialogDelete, {
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(result => {
            this.deleteEmit.emit(result ? true : false);
        });
    }
}




@Component({
    selector: 'dialog-delete',
    templateUrl: 'alert.dialog.component.html',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule],
    
})
    
export class DialogDelete {
    constructor(
        public dialogRef: MatDialogRef<DialogDelete>,
       
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}


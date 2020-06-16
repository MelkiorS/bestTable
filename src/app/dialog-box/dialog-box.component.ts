import {Component, Inject, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export enum DialogBoxEvent {
  CANCEL, ADD, UPDATE, DELETE
}

export interface DialogData {
  data: any,
  action: DialogBoxEvent,
  columnDef: string[],
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent{

  action: DialogBoxEvent
  localData:any
  dialogEvent = DialogBoxEvent
  fields: string[]

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData ) {
    this.localData = {...data.data}
    this.action = data.action
    this.fields = data.columnDef
  }

  doAction(){
    console.log(this.localData)
    this.dialogRef.close({event:this.action,data:this.localData})
  }

  closeDialog(){
    this.dialogRef.close({event:DialogBoxEvent.CANCEL})
  }

}

import {Component, Input, ViewChild} from '@angular/core';
import {DataService, SomeData} from '../services/data.service';
import {MatTable} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {DialogBoxComponent, DialogBoxEvent} from "../dialog-box/dialog-box.component";

@Component({
  selector: 'app-best-table',
  templateUrl: './best-table.component.html',
  styleUrls: ['./best-table.component.scss'],
})
export class BestTableComponent {

  @Input()
  dataSource: SomeData[] = []

  dialogEvent = DialogBoxEvent

  columns: string[] = [
    'healthIndex',
    'endDate',
    'minValueDateTime',
    'type',
    'cowId',
    'animalId',
    'eventId',
    'deletable',
    'lactationNumber',
    'daysInLactation',
    'ageInDays',
    'startDateTime',
    'reportingDateTime',
    'alertType',
    'duration',
    'originalStartDateTime',
    'endDateTime',
    'daysInPregnancy',
    'heatIndexPeak',
    'newGroupId',
    'newGroupName',
    'currentGroupId',
    'currentGroupName',
    'destinationGroup',
    'destinationGroupName',
    'calvingEase',
    'oldLactationNumber',
    'newborns',
    'cowEntryStatus',
    'birthDateCalculated',
    'sire',
    'breedingNumber',
    'isOutOfBreedingWindow',
    'interval']

  displayedColumns: string[] = ['action', ...this.columns]

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private dialog: MatDialog, private dataService: DataService) {
  }

  openDialog(action: DialogBoxEvent, row) {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: {data: row, action, columnDef: this.getEditableFields(this.columns)}
    })

    dialogRef.afterClosed().subscribe(result => {
      if ( result?.event === DialogBoxEvent.ADD) {
        this.addRowData(result.data)
      } else if (result?.event === DialogBoxEvent.UPDATE) {
        this.updateRowData(result.data)
      } else if (result?.event === DialogBoxEvent.DELETE) {
        this.deleteRowData(result.data)
      }
    })
  }

  getEditableFields(columns: string[]): string[] {
    return columns.filter(c => !c.toLowerCase().includes('id'))
  }

  deleteRowData(data) {
    this.dataService.deleteData(data)
      .subscribe(()=>{
        this.dataSource = this.dataSource
          .filter(v => v.eventId != data.eventId)
        this.table.renderRows()
      })
  }

  addRowData(data) {
    this.dataService.addData(data)
      .subscribe(d=>{
        this.dataSource.unshift(d);
        this.table.renderRows();
      })
  }

  updateRowData(data) {
    this.dataService.updateData(data)
      .subscribe(updated => {
        this.dataSource = this.dataSource.map(d => {
          if (d.eventId == updated.eventId) {
            d = {...d, ...updated,}
          }
          return d
        })
        this.table.renderRows();
      })
  }

}

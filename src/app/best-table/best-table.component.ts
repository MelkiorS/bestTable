import {ChangeDetectorRef, Component, Input, ViewChild} from '@angular/core';
import {Cow} from '../services/cow.service';
import {MatTable} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {DialogBoxComponent, DialogBoxEvent} from "../dialog-box/dialog-box.component";

@Component({
  selector: 'app-best-table',
  templateUrl: './best-table.component.html',
  styleUrls: ['./best-table.component.scss'],
})
export class BestTableComponent {

  @Input('cows')
  dataSource: Cow[] = []

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

  constructor(public dialog: MatDialog) {
  }

  openDialog(action: DialogBoxEvent, row) {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: {data: row, action, columnDef: this.getEditableFields(this.columns)}
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === DialogBoxEvent.ADD) {
        this.addRowData(result.data)
      } else if (result.event === DialogBoxEvent.UPDATE) {
        this.updateRowData(result.data)
      } else if (result.event === DialogBoxEvent.DELETE) {
        this.deleteRowData(result.data)
      }
    })
  }

  getEditableFields(columns: string[]): string[] {
    return columns.filter(c => !c.toLowerCase().includes('id'))
  }

  deleteRowData(data) {
    this.dataSource = this.dataSource
      .filter(v => v.eventId != data.eventId)
    this.table.renderRows()
  }

  addRowData(data) {
    //TODO get Ids from server
    // this.dataSource.push({});
    this.table.renderRows();
  }

  updateRowData(data) {
    this.dataSource = this.dataSource
      .map(d => {
        if (d.eventId == data.eventId) {
          d = {...d, ...data,}
        }
        return d
      })
    this.table.renderRows();
  }

}

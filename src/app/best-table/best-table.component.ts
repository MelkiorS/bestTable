import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Cow} from '../services/cow.service';

@Component({
  selector: 'app-best-table',
  templateUrl: './best-table.component.html',
  styleUrls: ['./best-table.component.scss'],
})
export class BestTableComponent implements OnInit {

  @Input('cows')
  dataSource: Cow[] = []

  displayedColumns: string[] = [
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

  ngOnInit(): void {
  }

}

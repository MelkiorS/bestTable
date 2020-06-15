import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MockData} from "../mock/data";
import {map} from "rxjs/operators";

export interface Cow {
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
  'interval'
}

@Injectable({
  providedIn: 'root'
})
export class CowService{
  private fetchCowApi = 'data/cows'

  constructor(private http: HttpClient) { }

  //TODO use proper cow interface
  fetchCowsDate(): Observable<any>{
    return this.http.get<any>(this.fetchCowApi)
      .pipe(
        map(resp => resp.result)
      )
  }

}

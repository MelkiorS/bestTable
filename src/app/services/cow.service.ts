import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface Cow {
 healthIndex: string
 endDate: string
 minValueDateTime: string
 type: string
 cowId: string
 animalId: string
 eventId: string
 deletable: string
 lactationNumber: string
 daysInLactation: string
 ageInDays: string
 startDateTime: string
 reportingDateTime: string
 alertType: string
 duration: string
 originalStartDateTime: string
 endDateTime: string
 daysInPregnancy: string
 heatIndexPeak: string
 newGroupId: string
 newGroupName: string
 currentGroupId: string
 currentGroupName: string
 destinationGroup: string
 destinationGroupName: string
 calvingEase: string
 oldLactationNumber: string
 newborns: string
 cowEntryStatus: string
 birthDateCalculated: string
 sire: string
 breedingNumber: string
 isOutOfBreedingWindow: string
 interval: string
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

import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface SomeData {
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
export class DataService{
  private dataApi = 'data/item'

  constructor(private http: HttpClient) { }

  fetchData(): Observable<Array<SomeData>>{
    return this.http.get<any>(this.dataApi)
      .pipe(
        map(resp => resp.result)
      )
  }

  updateData(data: SomeData) : Observable<SomeData>{
    return this.http.put<any>(this.dataApi,data)
      .pipe(
        map(resp => resp.data)
      )
  }

  deleteData(data: SomeData){
    return this.http.delete(this.dataApi+'?'+data.eventId)
  }

  addData(data: SomeData){
    return this.http.post(this.dataApi,data)
  }

}

import {Component, OnInit} from '@angular/core';
import {Cow, CowService} from "./services/cow.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  constructor(private cowService: CowService) { }
  loading:boolean = false
  cows: Cow[]

  ngOnInit(): void {
    this.loading = true
    this.cowService.fetchCowsDate().subscribe(cows => {
      this.cows = cows
      this.loading = false
    })
  }
}

import {Component, OnInit} from '@angular/core';
import {SomeData, DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  constructor(private dataService: DataService) { }
  loading:boolean = false
  data: SomeData[]

  ngOnInit(): void {
    this.loading = true
    this.dataService.fetchData().subscribe(data => {
      this.data = data
      this.loading = false
    })
  }
}

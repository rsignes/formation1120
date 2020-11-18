import { Component, OnInit } from '@angular/core';
import { RaceData } from 'src/app/models/race-data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'amb-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.css']
})
export class RaceListComponent implements OnInit {

  raceTable: RaceData[] = []

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.raceTable = this.dataService.raceTable
  }

}

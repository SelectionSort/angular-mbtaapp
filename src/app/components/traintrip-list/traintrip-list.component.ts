import {Component, OnInit} from '@angular/core';
import {TraintripService} from 'src/app/services/traintrip.service';
import {Traintrip} from 'src/app/common/traintrip';
import { interval } from 'rxjs';

@Component({
  selector: 'app-traintrip-list',
  templateUrl: './traintrip-list-table.component.html',
  styleUrls: ['./traintrip-list.component.css']
})
export class TraintripListComponent implements OnInit {

  traintrips: Traintrip[] = []

  constructor(private traintripService: TraintripService) {
  }


//auto freshing feature
  ngOnInit(): void {
    interval(5000).subscribe(() => {
        this.listTraintrip()
    })
  }

  listTraintrip() {
    this.traintripService.getTraintripList().subscribe(
      data => {
        this.traintrips = data
      }
    )
  }

}

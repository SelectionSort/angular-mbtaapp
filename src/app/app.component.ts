import { Component, OnInit } from '@angular/core';
import { map, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-mbtaapp';

  dateTime: Date

  ngOnInit(){
    timer(0,3000).subscribe(() => {
      this.dateTime = new Date()
    })
  
   
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tableFlex = 100;
  detailFlex = 0;

  constructor() { }

  ngOnInit() {
  }

  public toggle(): void {
    if (this.tableFlex === 100) {
      this.tableFlex = 50;
      this.detailFlex = 50;
    } else {
      this.tableFlex = 100;
      this.detailFlex = 0;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  patients$: Observable<Patient[]>;

  tableFlex = 100;
  detailFlex = 0;

  constructor(private patientsService: PatientsService) { }

  ngOnInit() {
    this.patients$ = this.patientsService.getPatients();
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

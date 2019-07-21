import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { deserialize } from 'json-typescript-mapper';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }

  public getPatients(): Observable<Patient[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/patients`)
    .pipe(map((rawPatients) => {
      const patients: Patient[] = [];
      rawPatients.forEach((rawPatient) => {
        patients.push(deserialize(Patient, rawPatient));
      });
      return patients;
    }));
  }
}

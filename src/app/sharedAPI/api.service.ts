import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { PatientModal } from '../dataModals/patient.modal';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  patientURL : string = "http://localhost:3000/patients";
  postPatient(data : any){
    return this.http.post<PatientModal[]>(this.patientURL, data)
    .pipe(map( (res:any) => {
      return res;
    }))

    
}
 
//get api service
getData(){
  return this.http.get<PatientModal[]>(this.patientURL)
}

// delete api service
deleteData(id : number){
  return this.http.delete<PatientModal[]>(this.patientURL+ id)
  .pipe(map((res:any) => {
    return res;
  }))
}

// update api service
updatePatient(data : any, id: number){
  return this.http.put<any>(this.patientURL+id, data)
  .pipe(map( (res:any) =>{
    return res;
  }))
}


}

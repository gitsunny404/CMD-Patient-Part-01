import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientModal } from 'src/app/dataModals/patient.modal';
import { ApiService } from 'src/app/sharedAPI/api.service';

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  // template:`
  //   <h1>Parent</h1>
  //   <app-pets [message]="message"]></app-pets>

  // `,
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent implements OnInit {
  
  formValue !: FormGroup;
  patientModalObj : PatientModal = new PatientModal;

  patientAllData: any = [];

  constructor(private formbuilder : FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName : [''],
      lastName : [''],
      userName : [''],
      email : [''],
      mobile:[''],
    })
  }

  postPatientDetails(){
    this.patientModalObj.firstName = this.formValue.value.firstName;
    this.patientModalObj.lastName = this.formValue.value.lastName;
    this.patientModalObj.userName = this.formValue.value.userName;
    this.patientModalObj.email = this.formValue.value.email;
    this.patientModalObj.mobile = this.formValue.value.mobile;

    this.api.postPatient(this.patientModalObj)
    .subscribe(res =>{
      console.log("Patient added successfully");
      alert("Patient added successfully");
      this.formValue.reset();
      let ref = document.getElementById('cancel')
      ref?.click();
    },
    err =>{
      alert("Something went wrong ... ");
    })
  }

  getAllPatients(){
    this.api.getData().subscribe((res : any) => {
      this.patientAllData = res;
      console.log(res);
    })
  }
}

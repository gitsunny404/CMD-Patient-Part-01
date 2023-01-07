import { Component, OnInit } from '@angular/core';
import { AddAppointmentDistributorService } from '../../core/add-appointment-distributor.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

    // Variable declaration and initialization

  // Dependency Injection inside constructor
  constructor(private addAppointmentDistributorService:AddAppointmentDistributorService) { }


  ngOnInit(): void {

    // Fetch / Load data


    // Validation Logic
  }



  // Logic for the submit
  onSubmit() {

  }
}

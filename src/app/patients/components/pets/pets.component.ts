import { Component,OnInit } from '@angular/core';
import { AddPetsComponent } from '../add-pets/add-pets.component';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  // template :`<h1>Child</h1>
  // <p>Message from daddy</p>
  // <p>{{message}}</p>
  // `,
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  constructor() { }

  addPetsComponent = AddPetsComponent;
  patientAllData: any = [];

  ngOnInit(): void {
  }
  list:boolean=true;
  card:boolean=false;

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }
}

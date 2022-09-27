import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/alumnos';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  listaAlumnos:Array<Persona> = [
    
    {nombre: 'Nicolas Cage', edad: 44},
    {nombre: 'Demi Moore', edad: 32},
    {nombre: 'Ricky Martin', edad: 51},
    {nombre: 'Bruce Willis', edad: 33},
    {nombre: 'Elon Musk', edad: 61},
    
  ]


  variable1: Number = 5;

  constructor() { }

  ngOnInit(): void {
  }

}

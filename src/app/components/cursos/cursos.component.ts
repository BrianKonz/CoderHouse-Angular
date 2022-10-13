import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  filtro: string = '';
  
  cursos: Curso [] = [
    {
      nombre: 'Angular',
      comision: '32310',
      profesor: 'Keven',
      fechaInicio: new Date(2022, 0, 1),
      fechaFin: new Date(2022, 1, 28),
      inscripcionAbierta: true,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg', 
    },
    {
      nombre: 'Java',
      comision: '33411',
      profesor: 'Pedro',
      fechaInicio: new Date(2022, 4, 1),
      fechaFin: new Date(2022, 5, 28),
      inscripcionAbierta: false,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
    },
    {
      nombre: 'Angular',
      comision: '34512',
      profesor: 'Santiago',
      fechaInicio: new Date(2022, 8, 1),
      fechaFin: new Date(2022, 9, 28),
      inscripcionAbierta: false,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
    },
  ]



  constructor() { }

  ngOnInit(): void {
  }

  
}

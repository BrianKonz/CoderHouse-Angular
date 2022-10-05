import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/models/alumnos';
import { __values } from 'tslib';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {


  listaAlumnos:Persona[] = [
    
    new Persona('Nicolas','Cage',44,'Angular'),
    new Persona('Demi','Moore',51,'JavaScript'),
    new Persona('Ricky','Martin',33,'NodeJs'),
    new Persona('Elon','Musk',61,'Java')    
  ];

  columnas: string[] =['ID','Nombre','Apellido','Edad','Curso','Acciones']
  dataSource: MatTableDataSource<Persona> = new MatTableDataSource<Persona>(this.listaAlumnos);


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroEdad:number=0;
  cuadroCurso:string="";

  agregarAlumno(){
    let miAlumno = new Persona (this.cuadroNombre,this.cuadroApellido,this.cuadroEdad,this.cuadroCurso)
    this.listaAlumnos.push(miAlumno)
  }


  constructor() { }

  ngOnInit(): void {
  }

  filtrar(event:Event){
    const valorObtenido = (event.target as HTMLInputElement).value;

    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

}

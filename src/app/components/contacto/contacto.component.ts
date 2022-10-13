import { Component, OnInit } from '@angular/core';
import { Consulta } from 'src/app/models/consultas';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

consultaAlumnos:Consulta [] = [
  new Consulta('Pedro','pedro@gmail.com','Como compro un curso')
]

  cuadroNombreContacto:string="";
  cuadroMailContacto:string="";
  cuadroConsutaContacto:string="";

  enviarConsulta(){
    let miConsulta = new Consulta (this.cuadroNombreContacto,this.cuadroMailContacto,this.cuadroConsutaContacto)
    this.consultaAlumnos.push(miConsulta)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

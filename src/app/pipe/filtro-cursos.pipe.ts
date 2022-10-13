import { Pipe, PipeTransform } from '@angular/core';
import { Curso } from '../models/curso';

@Pipe({
  name: 'filtroCursos'
})
export class FiltroCursosPipe implements PipeTransform {

  transform(cursos: Curso [], filtro: string): Curso[] {
    return cursos.filter(curso => curso.comision.includes(filtro.toLocaleLowerCase()) || curso.nombre.includes(filtro));
  }

}

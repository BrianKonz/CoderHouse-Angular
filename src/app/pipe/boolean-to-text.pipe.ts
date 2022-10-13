import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToText'
})
export class BooleanToTextPipe implements PipeTransform {

  transform(value: boolean, ...args: string[]): string {
    
    return value ? args[0] : args[1];
  }
}

// para pasar el pipe al html sería: {{ curso.inscripcionAbrieta | booleanToText: 'Abierta' : 'Cerrada'}}
// para darle estilo, creo un span y dentro coloco [appBooleanStyle]="curso.inscripcionAbrieta"


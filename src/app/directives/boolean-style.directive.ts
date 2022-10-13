import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBooleanStyle]'
})
export class BooleanStyleDirective implements OnInit{
  //con esto veo si el curso acepta o no inscripciones
  @Input('appBooleanStyle') inscripcionAbierta!: boolean;

  constructor(

    // elemento va a tener la referencia de la etiqueta html en donde use la directiva.
    private elemento: ElementRef,
    // render me va a servir para agregarle estilo a este elemento.
    private renderer: Renderer2
  ) {


   }

   ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, 'padding', '0px 10px 0px 10px');
    this.renderer.setStyle(this.elemento.nativeElement, 'border-radius', '40px');
    this.renderer.setStyle(this.elemento.nativeElement, 'color', '#FFFFFF');
    this.renderer.setStyle(this.elemento.nativeElement, 'background-color', this.inscripcionAbierta ? '#4CAF50' : '#F44336');
  }
  //para colocar un icono, en vez de Si o NO, sería.... this.renderer.createelement()

}

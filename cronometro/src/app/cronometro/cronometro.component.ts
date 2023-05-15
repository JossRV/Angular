import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})

// clase que hereda los elementos OnInit
export class CronometroComponent implements OnInit {
  // variable segundo de tipo numero
  public segundo: number = 0;

  // Directiva input que recibira los datos para el componente principal
  @Input() public inicio: number = 0;
  // Directiva output creando objeto con un evento a recibir
  @Output() public multiplo10 = new EventEmitter();

  // hook que inicializa el componente que se recibe en el selector
  ngOnInit(): void {
    // asigna el valor a la variable segundo que recibio de la variable inicio
    this.segundo = this.inicio;
    // funcion que nos permite ejecutarlo repetidamente (traer el metodo), asignandole los milisegundos
    setInterval(this.actualizarSegundo.bind(this), 1000);
  }

  // metodo privado que actualizara los segundos que se van contando
  private actualizarSegundo(): void {
    // se va incrementando los segundo de acuerdo a la funcion setInterval
    this.segundo++;
    // validacion del segundo usando modulo de 10 para asi asignar los 10 segundos que se intercambian
    if (this.segundo % 10 === 0) {
      // llamando metodo
      this.emitirMultiplo10();
    }
  }
  // metodo privado, trae la variable del evento para emitirlo
  private emitirMultiplo10(): void {
    // llamando el objeto del evento para emitir los segundos validados anteriormente
    this.multiplo10.emit(this.segundo);
  }
}

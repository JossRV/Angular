import { Component, EventEmitter, Output } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticaComponent {
  @Output()

  public emitirInformacion: EventEmitter<Heroe> = new EventEmitter();
  public heroes: Heroe[] = [
    {
      nombre: 'spiderman',
      poder: 100000
    },
    {
      nombre: 'hulk',
      poder: 100000
    }
  ];

  public enviarInformacion(): void {
    this.emitirInformacion.emit(this.heroes[1]);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'app-dbz-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  // decorador Output
  @Output()
  // evento
  public nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personajeAdd: Personaje[] = [
    { nombre: '', poder: 0 }
  ];

  public emitPersonaje(): void {
    this.nuevoPersonaje.emit(this.personajeAdd[0]);
  }
}

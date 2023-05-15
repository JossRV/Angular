import { Component } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public personajes: Personaje[] = [
    { nombre: "Goku", poder: 20000 }
  ];

  public obtenerPersonaje(personaje: Personaje): void {
    // usando interface para asignar nuevos datos del formulario,
    // evitamos que se modifique la informacion del listado
    let datoNuevo: Personaje[] = [
      { nombre: personaje.nombre, poder: personaje.poder }
    ];
    this.personajes.push(datoNuevo[0]);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public heroes: string[] = ['spiderman', 'superman', 'batman', 'goku'];

  public usuarios: any = [
    { id: 1, nombre: "Joss" },
    { id: 2, nombre: "mitzi" },
    { id: 3, nombre: "faty" },
  ];

  public edad = (year: number): boolean => {
    return year >= 18 ? true : false;
  }
}

import { Component,Input } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  // decorador input
  @Input()
  
  public personajeList: Personaje[] = [
    {
      nombre: 'Vegeta',
      poder: 40000
    }
  ];
}

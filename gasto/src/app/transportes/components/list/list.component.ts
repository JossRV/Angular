import { Component, Input } from '@angular/core';
import { Transportes } from '../../interfaces/transportes.interface';

@Component({
  selector: 'app-transporte-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()

  public transporteList: Transportes[] = [
    {
      id: 0,
      costo: 0,
      tipo: '',
      partida: '',
      destino: ''
    }
  ];
}

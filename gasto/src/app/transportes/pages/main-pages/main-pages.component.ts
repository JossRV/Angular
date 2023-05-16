import { Component, EventEmitter, Output } from '@angular/core';
import { Transportes } from '../../interfaces/transportes.interface';

@Component({
  selector: 'app-transportes-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.css']
})
export class MainPagesComponent {

  public transportes: Transportes[] = [
    {
      id: 0,
      costo: 7,
      tipo: 'Combi',
      partida: 'Tec',
      destino: 'MilpaAlta'
    }
  ];
  
  public obtenerDato(transporte: Transportes): void {
    let nuevo: Transportes[] = [
      {
        id: transporte.id,
        costo: transporte.costo,
        tipo: transporte.tipo,
        partida: transporte.partida,
        destino: transporte.destino
      }
    ]
    this.transportes.push(nuevo[0])
  }
}

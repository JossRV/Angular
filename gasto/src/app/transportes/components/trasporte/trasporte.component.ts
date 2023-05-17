import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transportes } from '../../interfaces/transportes.interface';

@Component({
  selector: 'app-trasporte',
  templateUrl: './trasporte.component.html',
  styleUrls: ['./trasporte.component.css']
})
export class TrasporteComponent {
  @Input()
  public inventario: Transportes[] = [
    {
      id: 0,
      costo: 0,
      tipo: '',
      partida: '',
      destino: ''
    }
  ];

  @Output()
  public nuevoTransporte: EventEmitter<Transportes> = new EventEmitter();
  

  public transporteAdd: Transportes[] = [
    {
      id: 0,
      costo: 0,
      tipo: '',
      partida: '',
      destino: ''
    }
  ];


  public guardar(): void {
    if(this.validaVacios()){
      if(this.buscarRepetidos()){
        this.nuevoTransporte.emit(this.transporteAdd[0]);
        this.limpieza();
      }
    }
  }

  public limpieza(): void {
    this.transporteAdd[0].id = 0;
    this.transporteAdd[0].costo = 0;
    this.transporteAdd[0].tipo = '';
    this.transporteAdd[0].partida = '';
    this.transporteAdd[0].destino = '';
  }

  public validaVacios(): boolean {
    if(
      this.transporteAdd[0].id > 0 &&
      this.transporteAdd[0].costo !== 0 &&
      this.transporteAdd[0].tipo !== '' &&
      this.transporteAdd[0].partida !== '' &&
      this.transporteAdd[0].destino !== ''
    ){
      return true;
    }
    alert('Los campos estan vacios');
    return false;
  }

  buscarRepetidos(): boolean {
    let id = this.transporteAdd[0].id;
    for (let i = 0; i < this.inventario.length; i++) {
      if (this.inventario[i].id == id) {
        alert('Este id esta repetido');
        return false;
      }
    }
    return true;
  }
}

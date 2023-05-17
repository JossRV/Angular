import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  // definimos la propiedad que nos ayuda a emitir la informacion
  @Output()
  public emitirInformacion: EventEmitter<string> = new EventEmitter();
  // definimos la propiedad que contiene la informacion a emitir
  public nombre: string = "Joss desde el hijo";
  // definimos el metodo que emite la informacion
  public enviarInformacion(): void{
    this.emitirInformacion.emit(this.nombre);
  }
}

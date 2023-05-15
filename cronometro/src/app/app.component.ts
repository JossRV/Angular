import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // variable de tipo string vacio
  public mensaje: string = '';
  // metodo actualizar, que recibira los datos del evento
  public actualizar(tiempo: number): void {
    // cada 10 segundos que recibe un valor, esta lo mostrara en el navegador
    this.mensaje = tiempo + ' (se actualiza cada 10 segundos)';
  }
}

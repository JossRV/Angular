import { Component } from '@angular/core';
import { Heroe } from './interfaces/heroe.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public recibeNombre(nombre: string): void {
    console.log(nombre);
  }
  public recibeHeroe(item: Heroe){
    console.log(item);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // variable e interpolacion
    public titulo:string = "Hola mundo desde el componente";
    public saludar():void{
        alert('Hola');
    }
}

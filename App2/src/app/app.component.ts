import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public titulo: String = "Contador";
    public tituloB: String = "Contador con Base";
    public count: number = 0;
    public countBase: number = 0;
    public base: number = 5;
    public contadorMas(): void {
        this.count += 1;
    }
    public contadorMenos(): void {
        this.count -= 1;
    }
    public contadorMasB(base:number): void {
        this.countBase += base;
    }
    public contadorMenosB(base:number): void {
        this.countBase -= base;
    }

}

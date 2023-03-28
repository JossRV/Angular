import { Component } from "@angular/core";

@Component({
    selector: 'usuarios-root',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuario.component.css']
})

export class UsuariosComponent{
    public titulo : string = 'Usuarios -> Hola';
}
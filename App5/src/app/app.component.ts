import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo: string = "Modules";

  inventario: any = [
    { id: 1, nombre: "Pantalones", precio: 200 },
    { id: 2, nombre: "Sueter", precio: 400 },
  ];
  formulario: any = {
    id: null,
    nombre: null,
    precio: null
  }

  // 1. funcion para limpiar los campos
  limpiar(): void {
    this.formulario.id = null;
    this.formulario.nombre = null;
    this.formulario.precio = null;
  }

  agregar(): void {
    // 2. validacion de campos vacios
    if (this.formulario.id == null || this.formulario.nombre == null || this.formulario.precio == null) {
      return alert("Hay campos vacios, compruebe porfavor");
    }
     
    // 3. validacion de id repetido
    for (let i = 0; i < this.inventario.length; i++) {
      if (this.inventario[i].id == this.formulario.id) {
        return alert("El id de este item ya existe, porfavor escriba uno diferente");
      }
    }

    const datoNuevo = {
      id: this.formulario.id,
      nombre: this.formulario.nombre,
      precio: this.formulario.precio,
    };
    this.inventario.push(datoNuevo);
    this.limpiar();
    return alert("agregado con exito");
  };

  seleccionar(articulos: any): void {
    this.formulario.id = articulos.id;
    this.formulario.nombre = articulos.nombre;
    this.formulario.precio = articulos.precio;
  };

  editar(): void {
    // 4. validar la edicion vacia o sin seleccionar
    if (this.formulario.id == null || this.formulario.nombre == null || this.formulario.precio == null) {
      return alert("Hay campos vacios, porfavor seleccione el articulo a editar");
    }

    for (let i = 0; i < this.inventario.length; i++) {
      if (this.inventario[i].id == this.formulario.id) {
        this.inventario[i].id = this.formulario.id;
        this.inventario[i].nombre = this.formulario.nombre;
        this.inventario[i].precio = this.formulario.precio;
        this.limpiar();
        return alert("Actualizado con exito");
      }
    }
  };

  eliminar(id: number): void {
    for (let i = 0; i < this.inventario.length; i++) {
      if (this.inventario[i].id == id) {
        this.inventario.splice(i, 1);
        return alert("Eliminado con exito");
      }
    }
  };

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-crud',
  templateUrl: './ng-crud.component.html',
  styleUrls: ['./ng-crud.component.scss']
})
export class NgCrudComponent {

  formulario: any = {
    id: "",
    nombre: "",
    precio: ""
  };

  inventario: any = [
    { id: 1, nombre: "Pantalon", precio: 100 },
    { id: 2, nombre: "camisa", precio: 200 },
  ];

  limpiar(): void {
    this.formulario.id = "";
    this.formulario.nombre = "";
    this.formulario.precio = "";
  }

  validarVacios(): boolean {
    if (this.formulario.id == "" || this.formulario.nombre == "" || this.formulario.precio == "") {
      alert('Campos vacios');
      return false;
    }
    return true;
  }

  agregar(): void {
    if (this.validarVacios()) {
      if (this.buscarRepetidos()) {
        const datoNuevo = {
          id: this.formulario.id,
          nombre: this.formulario.nombre,
          precio: this.formulario.precio
        }
        this.inventario.push(datoNuevo);
        this.limpiar();
        return alert('Agregado con exito');
      }
    }
  }

  eliminar(id: number): void {
    for (let i = 0; i < this.inventario.length; i++) {
      if (this.inventario[i].id == id) {
        this.inventario.splice(i, 1);
        return alert('Eliminado con exito')
      }
    }
  }

  seleccionar(articulo: any): void {
    this.formulario.id = articulo.id;
    this.formulario.nombre = articulo.nombre;
    this.formulario.precio = articulo.precio;
  }

  actualizar(): void {
    if (this.validarVacios()) {
      if (this.idValido()) {
        let id = this.formulario.id;
        for (let i = 0; i < this.inventario.length; i++) {
          if (this.inventario[i].id == id) {
            this.inventario[i].id = this.formulario.id;
            // this.formulario[i].nombre = this.formulario.nombre;
            this.formulario[i].precio = this.formulario.precio;
            // this.limpiar();
            return alert('Actualizado con exito')
          }
        }
      }
    }
  }

  buscarRepetidos(): boolean {
    let id = this.formulario.id;
    for (let i = 0; i < this.inventario.length; i++) {
      if (this.inventario[i].id == id) {
        alert('Este id esta repetido');
        return false;
      }
    }
    return true;
  }

  idValido(): boolean {
    let id = this.formulario.id;
    for (let i = 0; i < this.inventario.length; i++) {
      if (this.inventario[i].id == id) {
        return true;
      }
    }
    alert("Este id no es valido");
    return false;
  }
}

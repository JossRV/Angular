import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CascadaComponent } from './estiloCascada/cascada.component';
import { HyperComponent } from './hyper/hyper.component';
import { LenguajeJSComponent } from './lenguajeJS/lenguajeJS.component';
import { UsuariosComponent } from './usuarios/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    HyperComponent,
    LenguajeJSComponent,
    CascadaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

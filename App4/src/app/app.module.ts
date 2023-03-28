import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { HardwareComponent } from './hardware/hardware.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    HardwareComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

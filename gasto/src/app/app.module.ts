import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransportesModule } from './transportes/transportes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TransportesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

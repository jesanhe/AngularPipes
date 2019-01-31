import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContraseñaPipe } from './pipe/contraseña.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContraseñaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import {  HttpClientModule   } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BuscadordeimagenesComponent } from './componentes/buscadordeimagenes/buscadordeimagenes.component';
import { ListarimagenenComponent } from './componentes/listarimagenen/listarimagenen.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ErorresComponent } from './shared/erorres/erorres.component';
import { SpinerComponent } from './shared/spiner/spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadordeimagenesComponent,
    ListarimagenenComponent,
    NavbarComponent,
    ErorresComponent,
    SpinerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

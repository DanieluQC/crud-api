import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListaUsuarioComponent } from './components/lista-usuario/lista-usuario.component';
import { ListaCategoriaComponent } from './components/lista-categoria/lista-categoria.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    ListaUsuarioComponent,
    ListaCategoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

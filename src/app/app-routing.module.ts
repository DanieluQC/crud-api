import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
const routes: Routes = [
  { path: 'productos', component: ListaProductoComponent },
  { path: 'productos/:id', component: DetalleProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

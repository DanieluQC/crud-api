import { Component, OnInit } from '@angular/core';
import { NewProducto } from 'src/app/models/newProducto.model';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.scss']
})
export class ListaProductoComponent implements OnInit {
  productos: Producto[] = [];
  newProducto: NewProducto = {
    title: '',
    price: 0,
    description: '',
    categoryId: 0,
    images: [''],
  };

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos(): void {
    this.productoService.getProductos().subscribe(
      (data: Producto[]) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al cargar los productos.', error);
      }
    );
  }
  addImage() {
    this.newProducto.images.push('');
  }

  removeImage(index: number) {
    this.newProducto.images.splice(index, 1);
  }
  createProducto(): void {
    this.productoService.createProducto(this.newProducto).subscribe(
      (response) => {
        console.log('Producto creado: ', response);
      },
      (error) => {
        console.error('Error al crear un producto', error);
      }
    );
  }

  deleteProducto(id: number): void {
    this.productoService.deleteProducto(id).subscribe(
      () => {
        this.productos = this.productos.filter(producto => producto.id !== id);
        console.log('Producto elimado :', id);
      },
      (error) => {
        console.error('Error al eliminar el producto.', error);
      }
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductosI} from '../models/productos'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient:HttpClient) { }

  private api = 'http://127.0.0.1:3333/Producto';
  getAllProductos() {
    return this.httpClient.get<ProductosI[]>(this.api)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosI} from '../models/productos'
import { ResponseI } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos:ProductosI[]
  private api = 'http://127.0.0.1:3333/Producto';
  AUTH_SERVER: string = 'http://127.0.0.1:3333';
  constructor(private httpClient:HttpClient) { }

  getAllProductos() {
    return this.httpClient.get<ProductosI[]>(this.api)
  }


  postProducto(producto:ProductosI): Observable<ProductosI>{
    return this.httpClient.post<ProductosI>(`${this.AUTH_SERVER}/Producto`,producto).pipe()
  }


  getFindProductos(id):Observable<ProductosI>{
    return this.httpClient.get<ProductosI>(`${this.AUTH_SERVER}/Producto/`+id);
  }

  updateProducto(form:ProductosI,):Observable<ResponseI>{
    return this.httpClient.put<ResponseI>(`${this.AUTH_SERVER}/Producto/`,form)
  }

}

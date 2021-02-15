import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosI } from 'src/app/models/productos';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listarproductos',
  templateUrl: './listarproductos.component.html',
  styleUrls: ['./listarproductos.component.css']
})
export class ListarproductosComponent implements OnInit {

  constructor(private servicio: ProductoService, private router:Router) { }
  productos:ProductosI[]
  ngOnInit() {
    this.servicio.getAllProductos().subscribe(data => {this.productos=data});
  }

  detallesproducto(){
    this.router.navigate(["detallesproducto"])
  }

  

}

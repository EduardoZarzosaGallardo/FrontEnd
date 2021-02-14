import { Component, OnInit } from '@angular/core';
import { ProductosI } from '../../models/productos'
import { Router } from '@angular/router'
import {ProductoService } from '../../services/producto.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: ProductosI[];
  constructor(private productoService: ProductoService, private router:Router) { 
  }

  ngOnInit() {
    this.productoService.getAllProductos().subscribe(data => (this.productos = data));
  }

}

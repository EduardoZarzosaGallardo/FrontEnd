import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductosI } from '../../models/productos'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: ProductosI[];
  constructor(private authService: AuthService) { 
  }

  ngOnInit() {
    this.authService.getAllProductos().subscribe(data => this.productos = data);
  }

}

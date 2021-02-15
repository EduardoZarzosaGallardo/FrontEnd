import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosI } from 'src/app/models/productos';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-detallesproductos',
  templateUrl: './detallesproductos.component.html',
  styleUrls: ['./detallesproductos.component.css']
})
export class DetallesproductosComponent implements OnInit {

  constructor(private activarrouter: ActivatedRoute,private servicio:ProductoService, private router:Router) { }
  productos:ProductosI[]
  ngOnInit() {
    let productoid = this.activarrouter.snapshot.paramMap.get('id');
    console.log(productoid)
    this.servicio.getAllProductos().subscribe(data => {this.productos=data})
  }
  volveraproductos(){
    this.router.navigate(["detallesproducto"])
  }

  actualizarproducto(productoss:ProductosI):void {
    //let productoid = this.activarrouter.snapshot.paramMap.get('id');
    let id = localStorage.getItem("id")
    this.router.navigate(["editarproducto/"+id]);
  }

  deletproducto(){
    this.router.navigate(['eliminarproducto'])
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosI } from 'src/app/models/productos';
import { ProductoService } from 'src/app/services/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-editarproductos',
  templateUrl: './editarproductos.component.html',
  styleUrls: ['./editarproductos.component.css']
})
export class EditarproductosComponent implements OnInit {

  constructor(private activeRouter:ActivatedRoute,private router:Router, private service:ProductoService){}


  editarproducto(){
    this.router.navigate(["detallesproducto"])
  }

  Cancelar(){
    this.router.navigate(["detallesproducto"])
  }

  dataproductos:ProductosI;
  editarFormProducto = new FormGroup({
    Nombre:new FormControl(''),
    Descripcion:new FormControl(''),
    Fechadeexpiracion:new FormControl(''),
    Existenciadecantidad:new FormControl(''),
  })
  ngOnInit(): void {
    let productoid = this.activeRouter.snapshot.paramMap.get('id');
    let token= this.getToken()
    this.service.getFindProductos(productoid).subscribe(data =>{
      this.dataproductos = data[0];
      this.editarFormProducto.setValue({
        'Nombre': this.dataproductos.Nombre,
        'Descripcion': this.dataproductos.Descripcion,
        'Fechadeexpiracion': this.dataproductos.Fechadeexpiracion,
        'Existenciadecantidad': this.dataproductos.Existenciadecantidad,
      })
    })
    }

    
  onEditproducto(form:ProductosI){
    this.service.updateProducto(form).subscribe(data => {
      console.log(data)
    })
    
  }

    getToken(){
      return localStorage.getItem('ACCES_TOKEN')
    }


}

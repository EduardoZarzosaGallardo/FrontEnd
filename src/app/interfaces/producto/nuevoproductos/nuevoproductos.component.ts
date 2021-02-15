import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosI } from 'src/app/models/productos';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-nuevoproductos',
  templateUrl: './nuevoproductos.component.html',
  styleUrls: ['./nuevoproductos.component.css']
})
export class NuevoproductosComponent implements OnInit {


  constructor(private router:Router,private service:ProductoService){}

  /* 
   prueba:ProductosI = {Nombre:'',Descripcion:'',Fechadeexpiracion:'',Existenciadecantidad:0,Persona:0}
  salvar(prueba){
    this.service.postProducto(prueba).subscribe(data => {
      alert("Producto insertado con exito");
      this.router.navigate(["tusproductos"]);
    })
  }

  onSubmit(){
    this.service.postProducto(this.prueba).subscribe((response:ProductosI) => console.log(response))
  }
  */
  

  Cancelar(){
    this.router.navigate(["/tusproductos"])
  }

  onNewproducto(form):void{
    this.service.postProducto(form.value).subscribe(res => {
      this.router.navigateByUrl('detallesproducto');
    })
  }


  ngOnInit(): void {
  }

}

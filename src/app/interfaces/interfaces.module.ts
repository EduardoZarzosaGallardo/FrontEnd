import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InterfacesRoutingModule } from './interfaces-routing.module';
import { ProductoService } from '../services/producto.service';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AddproductoComponent } from './productos/addproducto/addproducto.component';
import { GetproductoComponent } from './productos/getproducto/getproducto.component';
import { GetfindproductoComponent } from './productos/getfindproducto/getfindproducto.component';


@NgModule({
  declarations: [PerfilComponent, HomeComponent, AddproductoComponent, GetproductoComponent, GetfindproductoComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    InterfacesRoutingModule,
  ],
  providers: [ProductoService,]
})
export class InterfacesModule { }

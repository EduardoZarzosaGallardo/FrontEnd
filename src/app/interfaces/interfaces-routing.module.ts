import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AddproductoComponent } from './productos/addproducto/addproducto.component';
import { GetproductoComponent } from './productos/getproducto/getproducto.component';
import { GetfindproductoComponent } from './productos/getfindproducto/getfindproducto.component';

const routes: Routes = [
    {path: 'getProducto', component: GetproductoComponent },
    {path: 'getFindProducto', component: GetfindproductoComponent },
    {path: 'perfil', component: PerfilComponent },
    {path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterfacesRoutingModule { }
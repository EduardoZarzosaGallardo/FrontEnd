import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from 'src/app/auth/auth.module';
import { GuardGuard } from './auth/guard.guard';
import { BorrarproductosComponent } from './interfaces/producto/borrarproductos/borrarproductos.component';
import { DetallesproductosComponent } from './interfaces/producto/detallesproductos/detallesproductos.component';
import { EditarproductosComponent } from './interfaces/producto/editarproductos/editarproductos.component';
import { ListarproductosComponent } from './interfaces/producto/listarproductos/listarproductos.component';
import { NuevoproductosComponent } from './interfaces/producto/nuevoproductos/nuevoproductos.component';

const routes: Routes = [
  
  {path: 'listarproductos', component: ListarproductosComponent },
  {path: 'editarproducto/:id', component: EditarproductosComponent },
  {path: 'eliminarproducto', component: BorrarproductosComponent },
  {path: 'detallesproducto', component: DetallesproductosComponent },
  {path: 'agregarproductos', component: NuevoproductosComponent },
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  {path: 'auth', loadChildren: 'src/app/auth/auth.module#AuthModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

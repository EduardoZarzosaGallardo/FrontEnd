import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from 'src/app/auth/auth.module';
import { InterfacesModule } from 'src/app/interfaces/interfaces.module';

const routes: Routes = [
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  {path: 'auth', loadChildren: 'src/app/auth/auth.module#AuthModule'},
  {path: 'interfaces', loadChildren: 'src/app/interfaces/interfaces.module#InterfacesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

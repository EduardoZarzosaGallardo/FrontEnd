import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './interfaces/navbar/navbar.component';
import { ListarproductosComponent } from './interfaces/producto/listarproductos/listarproductos.component';
import { EditarproductosComponent } from './interfaces/producto/editarproductos/editarproductos.component';
import { BorrarproductosComponent } from './interfaces/producto/borrarproductos/borrarproductos.component';
import { NuevoproductosComponent } from './interfaces/producto/nuevoproductos/nuevoproductos.component';
import { ProductoService } from './services/producto.service';
import { HttpClientModule } from '@angular/common/http';
import { DetallesproductosComponent } from './interfaces/producto/detallesproductos/detallesproductos.component';
import { MisproductosComponent } from './interfaces/producto/misproductos/misproductos.component';
import { BorrarpersonaComponent } from './interfaces/persona/borrarpersona/borrarpersona.component';
import { DetallespersonaComponent } from './interfaces/persona/detallespersona/detallespersona.component';
import { EditarpersonaComponent } from './interfaces/persona/editarpersona/editarpersona.component';
import { MipersonaComponent } from './interfaces/persona/mipersona/mipersona.component';
import { NuevapersonaComponent } from './interfaces/persona/nuevapersona/nuevapersona.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListarproductosComponent,
    EditarproductosComponent,
    BorrarproductosComponent,
    NuevoproductosComponent,
    DetallesproductosComponent,
    MisproductosComponent,
    BorrarpersonaComponent,
    DetallespersonaComponent,
    EditarpersonaComponent,
    MipersonaComponent,
    NuevapersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './components/inicio/inicio.component';
import { MascotasListarComponent } from './components/mascotas/mascotas-listar/mascotas-listar.component';
import{HttpClientModule} from  '@angular/common/http';
import { MascotasService } from './components/mascotas/shared/mascotas.service';
import { MascotasAgregarComponent } from './components/mascotas/mascotas-agregar/mascotas-agregar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MascotasEditarComponent } from './components/mascotas/mascotas-editar/mascotas-editar.component';
import { MascotasAdoptarComponent } from './components/mascotas/mascotas-adoptar/mascotas-adoptar.component';
import { MascotaCardComponent } from './components/mascotas/mascota-card/mascota-card.component';

@NgModule({
  declarations: [
    AppComponent,
    
    InicioComponent,
    
    MascotasListarComponent,
    
    MascotasAgregarComponent,
    
    MascotasEditarComponent,
    
    MascotasAdoptarComponent,
    
    MascotaCardComponent,
   ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [MascotasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

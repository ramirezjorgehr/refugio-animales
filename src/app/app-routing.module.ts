import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MascotasListarComponent } from './components/mascotas/mascotas-listar/mascotas-listar.component';
import { MascotasAgregarComponent } from './components/mascotas/mascotas-agregar/mascotas-agregar.component';
import { MascotasEditarComponent } from './components/mascotas/mascotas-editar/mascotas-editar.component';
import { MascotasAdoptarComponent } from './components/mascotas/mascotas-adoptar/mascotas-adoptar.component';


const routes: Routes = [ 

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
{ path: 'inicio', component: InicioComponent},
{path: 'mascotas', component: MascotasListarComponent},
{path: 'mascotas-agregar', component: MascotasAgregarComponent},
{path: 'mascotas-editar/:id', component: MascotasEditarComponent},
{path: 'mascotas-adoptar', component: MascotasAdoptarComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

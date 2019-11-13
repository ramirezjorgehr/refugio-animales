import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MascotasListarComponent } from './components/mascotas/mascotas-listar/mascotas-listar.component';
import { MascotasAgregarComponent } from './components/mascotas/mascotas-agregar/mascotas-agregar.component';
import { MascotasEditarComponent } from './components/mascotas/mascotas-editar/mascotas-editar.component';


const routes: Routes = [ 

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
{ path: 'inicio', component: InicioComponent},
{path: 'mascotas', component: MascotasListarComponent},
{path: 'mascotas-agregar', component: MascotasAgregarComponent},
{path: 'mascotas-editar/:id', component: MascotasEditarComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

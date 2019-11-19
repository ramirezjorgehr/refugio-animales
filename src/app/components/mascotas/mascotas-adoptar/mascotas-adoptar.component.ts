import { Component, OnInit,Input } from '@angular/core';
import { Mascota } from '../shared/mascota';
import { MascotasService } from '../shared/mascotas.service';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-mascotas-adoptar',
  templateUrl: './mascotas-adoptar.component.html',
  styleUrls: ['./mascotas-adoptar.component.css']
})
export class MascotasAdoptarComponent implements OnInit {
  public mascotas:Array<Mascota> = [];
  public booleano:Boolean= false;
  public mascotaSeleccionada:Mascota;
  verTodos:boolean=true;
  verPerros:boolean=false;
  verGatos:boolean=false;
  verPajaros:boolean=false;
  verOtros:boolean=false;
  
  perros =[];
  gatos=[];
  pajaros=[];
  otros=[];

  constructor(private mascotasService:MascotasService) { }

  ngOnInit() {
    this.mascotasService.getMascotas().subscribe((data)=>{
      this.mascotas = data;
    })
  }

  mostrar(mascota:Mascota){
    this.mascotaSeleccionada=mascota;
    this.booleano=true
  }
  ocultar(){
    this.booleano=false
  }

  adoptar(){
    let id=this.mascotaSeleccionada.id;
   this.mascotasService.deleteMascota(id).subscribe((data)=>{
     this.mascotas.splice(
       this.mascotas.findIndex(m => m.id == id),
       1
     );
    });
    this.booleano=false;
}
Perros(){
  this.mascotasService.getMascotas().subscribe((data)=>{
    this.mascotas = data;
    this.perros=[];
    for(let perro of this.mascotas){
     if( perro.tipo=='perro'){
      this.perros.push(perro);
     }
    }
    this.verPerros=true;
    this.verTodos=false;
    this.verPajaros=false;
    this.verOtros=false;
    this.verGatos=false;

return this.perros;
    })
}
Gatos(){
  this.mascotasService.getMascotas().subscribe((data)=>{
    this.mascotas = data;
    this.gatos=[];
    for(let gato of this.mascotas){
     if( gato.tipo=='gato'){
      this.gatos.push(gato);
     }
    }
    this.verGatos=true;
    this.verTodos=false;
    this.verPajaros=false;
    this.verOtros=false;
    this.verPerros=false;
    
return this.gatos;
    })
}
Pajaros(){
  this.mascotasService.getMascotas().subscribe((data)=>{
    this.mascotas = data;
    this.pajaros=[];
    for(let pajaro of this.mascotas){
     if( pajaro.tipo=='pajaro'||pajaro.tipo=='pájaro'){
      this.pajaros.push(pajaro);
     }
    }
    this.verGatos=false;
    this.verTodos=false;
    this.verPajaros=true;
    this.verOtros=false;
    this.verPerros=false;
    
return this.gatos;
    })
}

Otros(){
  this.mascotasService.getMascotas().subscribe((data)=>{
    this.mascotas = data;
    this.otros=[];
    for(let otro of this.mascotas){
     if( !(otro.tipo=='gato')&&!(otro.tipo=='perro')&&!(otro.tipo=='pajaro')&&!(otro.tipo=='pájaro')){
      this.otros.push(otro);
     }
    }
    this.verGatos=false;
    this.verTodos=false;
    this.verPajaros=false;
    this.verOtros=true;
    this.verPerros=false;
    
return this.gatos;
    })
}
todos(){
  this.verGatos=false;
    this.verTodos=true;
    this.verPajaros=false;
    this.verOtros=false;
    this.verPerros=false;

}
}

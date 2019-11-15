import { Component, OnInit,Input } from '@angular/core';
import { Mascota } from '../shared/mascota';
import { MascotasService } from '../shared/mascotas.service';

@Component({
  selector: 'app-mascotas-adoptar',
  templateUrl: './mascotas-adoptar.component.html',
  styleUrls: ['./mascotas-adoptar.component.css']
})
export class MascotasAdoptarComponent implements OnInit {
  public mascotas:Array<Mascota> = [];
  public booleano:Boolean= false;
  public mascotaSeleccionada:Mascota;

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

}
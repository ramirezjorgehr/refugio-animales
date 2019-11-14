import { Component, OnInit } from '@angular/core';
import { MascotasService } from 'src/app/components/mascotas/shared/mascotas.service';
import { Mascota } from '../shared/mascota';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-mascotas-listar',
  templateUrl: './mascotas-listar.component.html',
  styleUrls: ['./mascotas-listar.component.css']
})
export class MascotasListarComponent implements OnInit {
mascota
  constructor(private mascotasService: MascotasService, private route: ActivatedRoute, private router:Router) { }

  public mascotas:Array<Mascota> = [];
  mostrarmodal:boolean=false;
  mostrarpregunta:boolean=true;
  mostrartacho:boolean=false;
  
  ngOnInit() {
    this.mascotasService.getMascotas().subscribe((data)=>{
      this.mascotas = data;
    })
  }

   borrar(){
     let id=this.mascota.id;
    this.mascotasService.deleteMascota(id).subscribe((data)=>{
      this.mascotas.splice(
        this.mascotas.findIndex(m => m.id == id),
        1
      );
      console.log(id);
       this.mostrarmodal=false;
       this.mostrartacho=false;
       this.mostrarpregunta=true;
    });

   }
  delete(){
   setTimeout(() => {
       this.borrar();
    
   }, 2000);
   this.mostrarpregunta=false;
   this.mostrartacho=true;
    
 }

  cancel(){
    this.mascotasService.getMascotas().subscribe(data=>{
      this.mascotas=data
      this.mostrarmodal=false}
      );
  }
  okBorrar(mascota:Mascota){
    this.mascota=mascota;
    this.mostrarmodal=true;
  }
}

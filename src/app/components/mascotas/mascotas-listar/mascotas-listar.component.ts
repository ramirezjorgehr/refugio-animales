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

  constructor(private mascotasService: MascotasService, private route: ActivatedRoute, private router:Router) { }

  public mascotas:Array<Mascota> = [];
  
  ngOnInit() {
    this.mascotasService.getMascotas().subscribe((data)=>{
      this.mascotas = data;
    })
  }
  delete(id:number){
  
    this.mascotasService.deleteMascota(id).subscribe((data)=>{
     this.mascotasService.getMascotas().subscribe(data=>this.mascotas=data);
    });
  }
}

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

  constructor(private mascotasService: MascotasService) { }

  public mascotas:Array<Mascota> = [];
  
  ngOnInit() {
    this.mascotasService.getMascotas().subscribe((data)=>{
      this.mascotas = data;
    })
  }

}

import { Component, OnInit,Input } from '@angular/core';
import { Mascota } from '../shared/mascota';

@Component({
  selector: 'app-mascota-card',
  templateUrl: './mascota-card.component.html',
  styleUrls: ['./mascota-card.component.css']
})
export class MascotaCardComponent implements OnInit {
  @Input() mascotaSeleccionada:Mascota;
  constructor() { }

  ngOnInit() {
  }

}

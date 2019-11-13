import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MascotasService } from 'src/app/components/mascotas/shared/mascotas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mascotas-agregar',
  templateUrl: './mascotas-agregar.component.html',
  styleUrls: ['./mascotas-agregar.component.css']
})
export class MascotasAgregarComponent implements OnInit {
  mascotasForm = this.fb.group({
    nombre: ['',[Validators.pattern('[a-zA-ZñÑ ]*'), Validators.required]],
    tipo: ['',[Validators.pattern('[a-zA-ZñÑ ]*'),Validators.required]],
    edad: ['',[Validators.required, Validators.pattern("^[0-9]$|^[0-9][0-9]$|^[0-9][0-9][0-9]$"), Validators.max(120),Validators.min(1)]],
    descripcion: ['',Validators.required]   
  });

  constructor(private fb: FormBuilder,private mascotasService: MascotasService,private router:Router) { }

  onSubmit() {
    this.mascotasService.addMascota(this.mascotasForm.value).subscribe(data => {
      this.router.navigate(['/mascotas']);
});
    console.warn(this.mascotasForm.value);
  }
  reset($event){
    event.preventDefault();
    this.mascotasForm.reset();
  
  }
  cancel($event){
    event.preventDefault();
    this.router.navigate(['/mascotas']);
  }
  
  ngOnInit() {

    this.mascotasService.addMascota(this.mascotasForm.value);
     
  }


}

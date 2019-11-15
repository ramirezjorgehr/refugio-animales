import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MascotasService } from 'src/app/components/mascotas/shared/mascotas.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mascotas-editar',
  templateUrl: './mascotas-editar.component.html',
  styleUrls: ['./mascotas-editar.component.css']
})
export class MascotasEditarComponent implements OnInit {
  mascotasForm = this.fb.group({
    id:[''],
    nombre: ['',[Validators.pattern('[a-zA-ZñÑ ]+'), Validators.required]],
    tipo: ['',[Validators.pattern('[a-zA-ZñÑ ]+'),Validators.required]],
    edad: ['',[Validators.required, Validators.pattern("^[0-9]$|^[0-9][0-9]$|^[0-9][0-9][0-9]$"), Validators.max(120),Validators.min(1)]],
    descripcion: ['',Validators.required] ,
    imagen: ['',Validators.required] 
  });
  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router,
    private mascotaService: MascotasService) { }
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.mascotaService.getMascota(parseInt(id)).subscribe((data)=>{
     console.warn(data);
     this.mascotasForm.setValue(data);

    })

}
onUpdate(){
  this.mascotaService.updateMascota(this.mascotasForm.value).subscribe(data => {
    this.router.navigate(['/mascotas']);
});
}
cancel($event){
  event.preventDefault();
  this.router.navigate(['/mascotas']);
}

}

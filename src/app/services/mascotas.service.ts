import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from '../components/mascotas-listar/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  baseUrl:String= 'http://localhost:8090/mascotas';

  constructor(private httpClient: HttpClient) { }
  public getMascotas() {
    return this.httpClient.get<Mascota[]>(`${this.baseUrl}`);
    }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  //listado de todos los empleados del backen
  private baseURL= "http://localhost:8085/api/v1/pacientes";


  constructor(private httpClient: HttpClient) { }

  //obtener empleados
  obtenerListaDePacientes(): Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(`${this.baseURL}`)
  }

  registrarPaciente(paciente:Paciente) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,paciente);
  }

  //este metodo sirve para actualizar el empleado
  actualizarPaciente(id:number,paciente:Paciente) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,paciente);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerPacientePorId(id:number):Observable<Paciente>{
    return this.httpClient.get<Paciente>(`${this.baseURL}/${id}`);
  }

  eliminarPaciente(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleados } from './empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private httpClient : HttpClient) { } 

//esta url obtiene el listado de todos los empleados en el backend
  private baseURL = "http://localhost:8080/api/v1/empleados";

  obtenerListadeEmpleados():Observable<Empleados[]>{
    return this.httpClient.get<Empleados[]>(`${this.baseURL}`);
  }

  registrarEmpleado(Empleados : Empleados
    ){

      return this.httpClient.post(`${this.baseURL}`, Empleados); 

    }
    actualizarEmpleado(id:number, empleado:Empleados) : Observable<object>{
     return this.httpClient.put(`${this.baseURL}/${id}`, empleado)} 

    eliminarEmpleado(id:number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`)
    }
}

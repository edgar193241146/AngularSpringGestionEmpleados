import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { Empleados } from '../empleados';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: Empleados[];


  constructor(private empleadosServicio:EmpleadoService, private router : Router) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado', id])
  }

  eliminarEmpleado(id:number){
    this.empleadosServicio.eliminarEmpleado(id).subscribe(dato  => {
      console.log(dato);
      this.obtenerEmpleados();  
    })
  }
  
   private obtenerEmpleados(){
    this.empleadosServicio.obtenerListadeEmpleados().subscribe(dato => {
      this.empleados = dato; 

    });
   }

}

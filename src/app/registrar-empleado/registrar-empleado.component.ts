import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { Empleados } from '../empleados';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleados : Empleados = new Empleados();
  constructor(private empleadosServicio : EmpleadoService, private router : Router) { }

  ngOnInit(): void {
    console.log(this.empleados);
  }

  guardarEmpleado(){
    this.empleadosServicio.registrarEmpleado(this.empleados).subscribe(dato => {
      console.log(dato);
    }, error => console.log(error));
    
  }

  irAlistadeEmpleados(){
    this.router.navigate(['/empleados']);
  }
  onSubmit(){
    this.guardarEmpleado();
  }

}

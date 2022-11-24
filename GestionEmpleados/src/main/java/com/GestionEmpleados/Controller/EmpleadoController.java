package com.GestionEmpleados.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.GestionEmpleados.Exceptions.ResourceNotFoundException;
import com.GestionEmpleados.Repository.EmpleadoRepository;
import com.GestionEmpleados.model.empleados;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200/")
public class EmpleadoController {

	@Autowired
	private EmpleadoRepository empleadorepo;

	@GetMapping("/listaEmpleados")
	public List<empleados> listarTodosLosEmpleados() {
		return empleadorepo.findAll();
	}

	@PostMapping("/empleados")
	public empleados guardarempleados(@RequestBody empleados empleado) {
		return empleadorepo.save(empleado);
	}

	@GetMapping("/empleados/{id}")
	public ResponseEntity<empleados> obtenerEmpleadosPorId(@PathVariable Long id) {
		empleados empleado = empleadorepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el id: " + id));
		return ResponseEntity.ok(empleado);
	}

}

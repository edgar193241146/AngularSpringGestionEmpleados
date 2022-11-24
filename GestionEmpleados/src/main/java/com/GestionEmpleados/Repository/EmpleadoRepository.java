package com.GestionEmpleados.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.GestionEmpleados.model.empleados;

@Repository
public interface EmpleadoRepository extends JpaRepository<empleados, Long> {

}

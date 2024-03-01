package com.hospital.hospital.controlador;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.hospital.excepciones.ResourceNotFoundException;

import com.hospital.hospital.entidad.Paciente;
// import com.hospital.hospital.excepciones.ResourceNotFoundException;
import com.hospital.hospital.repositorio.PacienteRepositorio;

// import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class PacienteController {
  @Autowired
  private PacienteRepositorio repositorio;

  //metodo para ver lista de pacientes
  @GetMapping("/pacientes")
  public List<Paciente> listarTodosLosPacientes(){
     return repositorio.findAll();
  }

  //metodo para registrar paciente
 @PostMapping("/pacientes")
   public Paciente create(@RequestBody Paciente paciente){
     return repositorio.save(paciente);
   }

   //metodo para buscar paciente
  @GetMapping("/pacientes/{id}")
   public ResponseEntity<Paciente> obtenerPacientePorId(@PathVariable Long id){
     Paciente paciente = repositorio.findById(id).orElseThrow(()->new ResourceNotFoundException("No existe el paciente con el ID:" +id));
     return ResponseEntity.ok(paciente);
   } 

   //metodo para actualizar paciente
   @PutMapping("/pacientes/{id}")
   public ResponseEntity<Paciente> actualizarPaciente(@PathVariable Long id,@RequestBody Paciente detallesPaciente){
    Paciente paciente = repositorio.findById(id).orElseThrow(()->new ResourceNotFoundException("No existe el paciente con el ID:" +id));
    paciente.setNombre(detallesPaciente.getNombre());
    paciente.setDni(detallesPaciente.getDni());
    paciente.setDireccion(detallesPaciente.getDireccion());
    paciente.setFechaNac(detallesPaciente.getFechaNac());
    paciente.setMedico(detallesPaciente.getMedico());
    paciente.setFechaCita(detallesPaciente.getFechaCita());

    Paciente pacienteActualizado = repositorio.save(paciente);

    return ResponseEntity.ok(pacienteActualizado);
   }

   //metodo para eliminar paciente
   @DeleteMapping("/pacientes/{id}")
  	public ResponseEntity<Map<String, Boolean>> eliminarPaciente(@PathVariable Long id){
		Paciente paciente = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("El id del Paciente no existe :" + id));
		
		repositorio.delete(paciente);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);

    }

}

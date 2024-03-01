import { PacienteService } from './../paciente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { Paciente } from '../paciente';

@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrl: './registrar-paciente.component.css'
})
export class RegistrarPacienteComponent implements OnInit{
  paciente : Paciente = new Paciente();
  constructor(private pacienteServicio:PacienteService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarPaciente(){
    this.pacienteServicio.registrarPaciente(this.paciente).subscribe(dato => {
      console.log(dato);
      this.irALaListaDePacientes();
    },error => console.log(error));
  }

  irALaListaDePacientes(){
    this.router.navigate(['/pacientes']);
     Swal('Paciente registrado',`El paciente ${this.paciente.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarPaciente();
  }

}

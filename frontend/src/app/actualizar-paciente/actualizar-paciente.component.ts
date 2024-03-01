import { PacienteService } from './../paciente.service';
import { Paciente } from '../paciente';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-actualizar-paciente',
  templateUrl: './actualizar-paciente.component.html',
  styleUrl: './actualizar-paciente.component.css'
})
export class ActualizarPacienteComponent implements OnInit{
  id:number;
  paciente:Paciente = new Paciente();
  constructor(private pacienteService:PacienteService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pacienteService.obtenerPacientePorId(this.id).subscribe(dato =>{
      this.paciente= dato;
    },error => console.log(error));
  }

  irAlaListaDePacientes(){
    this.router.navigate(['/pacientes']);
     Swal('Paciente actualizado',`El paciente ${this.paciente.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.pacienteService.actualizarPaciente(this.id,this.paciente).subscribe(dato => {
      this.irAlaListaDePacientes();
    },error => console.log(error));
  }

}

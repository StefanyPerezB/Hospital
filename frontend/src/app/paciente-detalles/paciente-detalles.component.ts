import { Component, OnInit } from '@angular/core';
import { PacienteService } from './../paciente.service';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from '../paciente';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-paciente-detalles',
  templateUrl: './paciente-detalles.component.html',
  styleUrl: './paciente-detalles.component.css'
})
export class PacienteDetallesComponent implements OnInit{
  id:number;
  paciente:Paciente;
  constructor(private route:ActivatedRoute,private pacienteServicio:PacienteService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.paciente= new Paciente();
    this.pacienteServicio.obtenerPacientePorId(this.id).subscribe(dato => {
      this.paciente = dato;
    });
  }

}

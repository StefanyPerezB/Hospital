// import { PacienteService } from './../paciente.service';
import { Paciente } from '../paciente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { PacienteService } from '../paciente.service';
import { config } from '@fortawesome/fontawesome-svg-core' 
@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrl: './lista-pacientes.component.css'
})
export class ListaPacientesComponent implements OnInit{

  

  pacientes:Paciente[];

  constructor(private pacienteServicio:PacienteService,private router:Router) { }

  // dtoptions:DataTable.Settings= {};


  ngOnInit(): void {
    this.obtenerPacientes();

  }

  actualizarPaciente(id:number){
    this.router.navigate(['actualizar-paciente',id]);
  }

  private obtenerPacientes(){
    this.pacienteServicio.obtenerListaDePacientes().subscribe(dato => {
      this.pacientes = dato;
    });
  }

       eliminarPaciente(id:number){
         Swal({
           title: '¿Estas seguro?',
           text: "Confirma si deseas eliminar al paciente",
         type: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Si , elimínalo',
         cancelButtonText: 'No, cancelar',
           confirmButtonClass: 'btn btn-success',
           cancelButtonClass: 'btn btn-danger',
           buttonsStyling: true
         }).then((result) => {
           if(result.value){
             this.pacienteServicio.eliminarPaciente(id).subscribe(dato => {
               console.log(dato);
              this.obtenerPacientes();
               Swal(
                 'Paciente eliminado',
                 'El paciente ha sido eliminado con exito',
                 'success'
               )
             })
          }
         })
       }

   

  // eliminarCliente(id:number){
  //   this.clienteServicio.eliminarCliente(id).subscribe(dato => {
  //     console.log(dato);
  //      this.obtenerClientes();
  //   })
  // }

   verDetallesDelPaciente(id:number){
    this.router.navigate(['paciente-detalles',id]);
   }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarPacienteComponent } from './actualizar-paciente/actualizar-paciente.component';
import { PacienteDetallesComponent } from './paciente-detalles/paciente-detalles.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  {path: 'pacientes', component:ListaPacientesComponent},
  //  {path: '', redirectTo: 'pacientes', pathMatch: 'full'},
  {path: 'registrar-paciente', component:RegistrarPacienteComponent},
   {path: 'paciente-detalles/:id', component:PacienteDetallesComponent},
  {path: 'actualizar-paciente/:id', component:ActualizarPacienteComponent},
  {path: 'section', component:SectionComponent},
   {path: '', redirectTo: 'section', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

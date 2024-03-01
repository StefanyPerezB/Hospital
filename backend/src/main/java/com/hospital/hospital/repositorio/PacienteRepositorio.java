package com.hospital.hospital.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hospital.hospital.entidad.Paciente;

public interface PacienteRepositorio extends JpaRepository<Paciente, Long> {

}

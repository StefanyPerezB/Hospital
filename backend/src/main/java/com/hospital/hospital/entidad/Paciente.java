package com.hospital.hospital.entidad;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.util.Date;

@Entity
@Table(name = "pacientes")
public class Paciente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     private long id;
    
    @Column(name = "nombre", length = 60, nullable = false)
     private String nombre;

     @Column(name = "dni", length = 60, nullable = false, unique = true)
     private String dni;
    
     @Column(name = "direccion", length = 60, nullable = false)
     private String direccion;
            
      @Column(name = "fechaNac")
      @Temporal(TemporalType.DATE)
      private Date fechaNac;

      @Column(name = "medico", length = 60, nullable = false)
      private String medico; 
    
      @Column(name = "fechaCita")
      @Temporal(TemporalType.DATE)
      private Date fechaCita;
    
    
     public Paciente(){
    
     }
    
     public Paciente(Long id, String nombre,  String dni, String direccion, Date fechaNac, String medico, Date fechaCita){
       this.id=id;
       this.nombre=nombre;
       this.dni=dni;
       this.direccion=direccion;
       this.fechaNac=fechaNac;
       this.medico=medico;
       this.fechaCita=fechaCita;
     }
    
     public Long getId(){
         return id;
     }
    
     public void setId(Long id){
       this.id=id;
     }
    
     public String getNombre(){
        return nombre;
     }
    
     public void setNombre(String nombre){
         this.nombre=nombre;
     }
    
    
     public String getDni(){
        return dni;
     }
    
     public void setDni(String dni){
         this.dni=dni;
     }

     public String getApellido(){
      return direccion;
    }
   
    public void setDireccion(String direccion){
        this.direccion=direccion;
    }

    
     public String getDireccion(){
        return direccion;
     }
    
    
     public Date getFechaNac(){
       return fechaNac;
     }
    
     public void setFechaNac(Date fechaNac){
         this.fechaNac=fechaNac;
     }
    
     public String getMedico(){
        return medico;
     }
    
     public void setMedico(String medico){
         this.medico=medico;
     }

     public Date getFechaCita(){
      return fechaCita;
    }
   
    public void setFechaCita(Date fechaCita){
        this.fechaCita=fechaCita;
    }

    
}

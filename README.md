# Citas médicas Hospital - Microservicios

El proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.

# Descripción del proyecto

El proyecto consiste en desarrollar un sistema de gestión de citas hospitalarias utilizando Angular, un popular framework de desarrollo web. El sistema estará diseñado para permitir al recepcionista, gestionar eficientemente las citas médicas en el hospital.

## Ejecución de microservicio

Ejecute `ng serve` para iniciar el microservicio en angular. Ingrese a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos fuente.

## Detalles

- Backend: Spring Boot
- Frontend: Angular
- Base de datos: MySQL
- Crear la base de datos: hospital

## Ejecutar el proyecto
1. Backend:

```
mvn spring-boot:run
```
2. Frontend:

```
npm install && ng serve
```

## Extras

Backend: Cambiar las credenciales en `application.properties`
```
spring.datasource.username=root
spring.datasource.password=root
```

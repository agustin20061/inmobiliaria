import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { IUsuario } from '../../models/usuario.model';
import { IDireccion } from '../../models/direccion.model';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email?: string;
  password?: string;
  confirmPassword?: string;
  nombre?: string;
  telefono?: number;
  nombreUsuario?: string;
  fechaNacimiento?: Date;
  calle?: string;
  numero?: number;
  piso?: number;
  departamento?: string;
  provincia?: string;
  ciudad?: string;
  codigoPostal?: number;
  lastname?: string;
  dni?: number;

  constructor(private usuarioService: UsuarioService) {}
  
  register() {
    e.preventDefault();
    console.log(Number((<HTMLInputElement>document.getElementById("isbn")).value));
    
    this.usuarioService.agregarUsuario( this.new_(0,(<HTMLInputElement>document.getElementById("email")).value, (<HTMLInputElement>document.getElementById("titulo")).value,(<HTMLInputElement>document.getElementById("autor")).value,Number((<HTMLInputElement>document.getElementById("año")).value),Number((<HTMLInputElement>document.getElementById("paginas")).value),(<HTMLInputElement>document.getElementById("editorial")).value))
    .subscribe(() => {
      console.log('Se modifico exitosamente');
    }, error => {
      console.error('Error al modificar el turno', error);
    });
  }
   new_(
    dni?: number,
  mail?: string,  
  telefono?: string,
  nombre?: string,
  apellido?: string,
  nombreUsuario?: string,
  contrasenia?: string,
  fechaNacimiento?: Date,
  direccion?: IDireccion,
  id?: number,
  ): IUsuario {
    return {
      id: (id ?? -1),
    dni: (dni ?? 0),
    mail: (mail ?? ''),
    telefono: (telefono ?? ''),
    nombre: (nombre ?? ''),
    apellido: (apellido ?? ''),
    nombreUsuario: (nombreUsuario ?? ''),
    contrasenia: (contrasenia ?? ''),
    fechaNacimiento: (fechaNacimiento ? new Date(fechaNacimiento) : new Date()),
    direccion: (direccion ?? Direccion.new())
    };
  }
  
}



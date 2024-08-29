import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router'; 
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from '../../models/usuario.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule, CommonModule,RouterOutlet, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuarios: IUsuario[]=[];
  resultados: IUsuario[]=[];
  email?: string;
  password?: string;
 // servicio = inject(UsuarioService);

  
  constructor(private servicio: UsuarioService) {
    this.servicio.obtenerTodosLosUsuarios().subscribe((data) => {
      this.usuarios= data;
    });
  }
  login() {
    console.log(this.email);
    console.log(this.password);
  }
 
}

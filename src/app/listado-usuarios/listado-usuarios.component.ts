import { Component, OnInit } from '@angular/core';
import { User } from '../modelos/user';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  listadoUsuarios:User[]=[];

  constructor(private usuarioService:UsuarioService) {
  
    this.usuarioService.getUsuarios().
    subscribe(data => {
      console.log(data)
      this.listadoUsuarios = data;
      //this.userArray  = data.data;
    }, error => console.log(error));
  }

  ngOnInit(): void {
  }

}

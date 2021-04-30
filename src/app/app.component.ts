import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen-front';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }
  Nuevo(){
    this.router.navigate(["add"]);
  }
  Editar(){
    this.router.navigate(["edit"]);
  }

  ListarD(){
    this.router.navigate(["listard"]);
  }
  NuevoD(){
    this.router.navigate(["addd"]);
  }

  ListarC(){
    this.router.navigate(["listarc"]);
  }
  NuevoC(){
    this.router.navigate(["addc"]);
  }
}

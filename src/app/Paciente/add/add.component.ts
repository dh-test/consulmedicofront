import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/Modelos/Paciente';
import { ServiceService } from 'src/app/Service/service.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  paciente: Paciente = new Paciente();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(paciente:Paciente){
    this.service.createPaciente(paciente)
    .subscribe(data=>{
      alert("Se agrego correctamente!");
      this.router.navigate(["listar"]);
    })
  }
}

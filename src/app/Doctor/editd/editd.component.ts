import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Modelos/Doctor';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editd',
  templateUrl: './editd.component.html',
  styleUrls: ['./editd.component.css']
})
export class EditdComponent implements OnInit {

  doctor : Doctor = new Doctor();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("idDoctor");
    this.service.getDoctorId(+id!).subscribe(data=> {
      this.doctor=data;
    })
  }

  Actualizar(doctor:Doctor){
    this.service.updateDoctor(doctor)
    .subscribe(data=> {this.doctor=data;
      alert("Se actualizo correctamente!");
      this.router.navigate(["listard"]);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Modelos/Doctor';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-addd',
  templateUrl: './addd.component.html',
  styleUrls: ['./addd.component.css']
})
export class AdddComponent implements OnInit {

  doctor: Doctor = new Doctor();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(doctor:Doctor){
    this.service.createDoctor(doctor)
    .subscribe(data=>{
      alert("Se agrego correctamente!");
      this.router.navigate(["listard"]);
    })
  }

}

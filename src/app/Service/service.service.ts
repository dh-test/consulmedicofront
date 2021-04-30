import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Paciente} from '../Modelos/Paciente';
import {Doctor} from '../Modelos/Doctor';
import { Consulta } from '../Modelos/Consulta';
import { Medicamento } from '../Modelos/Medicamento';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/pacientes';

  getPacientes(){
    return this.http.get<Paciente[]>(this.url);
  }

  createPaciente(paciente:Paciente){
    return this.http.post<Paciente>(this.url,paciente);
  }

  getPacienteId(idPaciente:number){
    return this.http.get<Paciente>(this.url + "/" + idPaciente);
  }

  updatePaciente(paciente:Paciente){
    return this.http.put<Paciente>(this.url+"/"+paciente.idPaciente, paciente);
  }

  deletePaciente(paciente:Paciente){
    return this.http.put<Paciente>(this.url+"/"+paciente.idPaciente, paciente);
  }


  urld = 'http://localhost:8080/doctores';

  getDoctores(){
    return this.http.get<Doctor[]>(this.urld);
  }

  createDoctor(doctor:Doctor){
    return this.http.post<Doctor>(this.urld,doctor);
  }

  getDoctorId(idDoctor:number){
    return this.http.get<Doctor>(this.urld + "/" + idDoctor);
  }

  updateDoctor(doctor:Doctor){
    return this.http.put<Doctor>(this.urld+"/"+doctor.idDoctor, doctor);
  }
  deleteDoctor(doctor:Doctor){
    return this.http.put<Doctor>(this.urld+"/"+doctor.idDoctor, doctor);
  }

  urlc = 'http://localhost:8080/consultas';

  getConsultas(){
    return this.http.get<Consulta[]>(this.urlc);
  }

  createConsulta(consulta:Consulta){
    return this.http.post<Consulta>(this.urlc,consulta);
  }

  getConsultaId(idConsulta:number){
    return this.http.get<Consulta>(this.urlc + "/" + idConsulta);
  }

  updateConsulta(consulta:Consulta){
    return this.http.put<Consulta>(this.urlc+"/"+ consulta.idConsulta, consulta);
  }

  deleteConsulta(consulta:Consulta){
    return this.http.put<Consulta>(this.urlc+"/"+ consulta.idConsulta, consulta);
  }

  //medicamentos
  urlm = 'http://localhost:8080/medicamentos';
  getMedicamentos(){
    return this.http.get<Medicamento[]>(this.urlm);
  }

  createMedicamento(medicamento:Medicamento){
    return this.http.post<Medicamento>(this.urlm,medicamento);
  }

  getMedicamentoId(idMedicamento:number){
    return this.http.get<Medicamento>(this.urlm + "/" + idMedicamento);
  }

  updateMedicamento(medicamento:Medicamento){
    return this.http.put<Medicamento>(this.urlm+"/"+ medicamento.idMedicamento, medicamento);
  }
  deleteMedicamento(medicamento:Medicamento){
    return this.http.put<Medicamento>(this.urlm+"/"+ medicamento.idMedicamento, medicamento);
  }
}

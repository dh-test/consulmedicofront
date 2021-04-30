import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Paciente/add/add.component';
import { EditComponent } from './Paciente/edit/edit.component';
import { ListarComponent } from './Paciente/listar/listar.component';
import { AdddComponent } from './Doctor/addd/addd.component';
import { EditdComponent } from './Doctor/editd/editd.component';
import { ListardComponent } from './Doctor/listard/listard.component';
import { AddcComponent } from './Consulta/addc/addc.component';
import { EditcComponent } from './Consulta/editc/editc.component';
import { ListarcComponent } from './Consulta/listarc/listarc.component';
import { AddmComponent } from './Medicamento/addm/addm.component';
import { EditmComponent } from './Medicamento/editm/editm.component';
import { ListarmComponent } from './Medicamento/listarm/listarm.component';

const routes: Routes = [
  {path: 'listar', component:ListarComponent},
  {path: 'add', component:AddComponent},
  {path: 'edit', component:EditComponent},
  {path: 'listard', component:ListardComponent},
  {path: 'addd', component:AdddComponent},
  {path: 'editd', component:EditdComponent},
  {path: 'listarc', component:ListarcComponent},
  {path: 'addc', component:AddcComponent},
  {path: 'editc', component:EditcComponent},
  {path: 'listarm', component:ListarmComponent},
  {path: 'addm', component:AddmComponent},
  {path: 'editm', component:EditmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

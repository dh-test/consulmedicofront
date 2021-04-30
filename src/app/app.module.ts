import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Paciente/listar/listar.component';
import { AddComponent } from './Paciente/add/add.component';
import { EditComponent } from './Paciente/edit/edit.component';
import { ListardComponent } from './Doctor/listard/listard.component';
import { AdddComponent } from './Doctor/addd/addd.component';
import { EditdComponent } from './Doctor/editd/editd.component';
import { FormsModule} from '@angular/forms';
import { ServiceService} from '../app/Service/service.service';
import { HttpClientModule} from '@angular/common/http';
import { ListarcComponent } from './Consulta/listarc/listarc.component';
import { EditcComponent } from './Consulta/editc/editc.component';
import { AddcComponent } from './Consulta/addc/addc.component';
import { ListarmComponent } from './Medicamento/listarm/listarm.component';
import { EditmComponent } from './Medicamento/editm/editm.component';
import { AddmComponent } from './Medicamento/addm/addm.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    ListardComponent,
    AdddComponent,
    EditdComponent,
    ListarcComponent,
    EditcComponent,
    AddcComponent,
    ListarmComponent,
    EditmComponent,
    AddmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

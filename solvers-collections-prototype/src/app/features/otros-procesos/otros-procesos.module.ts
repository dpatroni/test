import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OtrosProcesosRoutingModule } from './otros-procesos-routing.module';
import { OtrosProcesosHomeComponent } from './components/otros-procesos-home/otros-procesos-home.component';
import { ClienteEmpresaListOtrosComponent } from './components/cliente-empresa-list-otros/cliente-empresa-list-otros.component';
import { CasoJudicialListOtrosComponent } from './components/caso-judicial-list-otros/caso-judicial-list-otros.component';
import { ProcesoJudicialDetailOtrosComponent } from './components/proceso-judicial-detail-otros/proceso-judicial-detail-otros.component';

@NgModule({
  declarations: [

  ],
  imports: [
    OtrosProcesosHomeComponent,
    ClienteEmpresaListOtrosComponent,
    CasoJudicialListOtrosComponent,
    ProcesoJudicialDetailOtrosComponent,
    CommonModule,
    FormsModule,
    OtrosProcesosRoutingModule
  ],
  exports: [
    OtrosProcesosHomeComponent
  ]
})
export class OtrosProcesosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { JudicialRoutingModule } from './judicial-routing-module';
import { JudicialHomeComponent } from './components/judicial-home/judicial-home';
import { ClienteEmpresaListJudicialComponent } from './components/cliente-empresa-list-judicial/cliente-empresa-list-judicial';
import { CasoJudicialListComponent } from './components/caso-judicial-list/caso-judicial-list';
import { ProcesoJudicialDetailComponent } from './components/proceso-judicial-detail/proceso-judicial-detail';


@NgModule({
  declarations: [
    JudicialHomeComponent,
    ClienteEmpresaListJudicialComponent,
    CasoJudicialListComponent,
    ProcesoJudicialDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Add FormsModule here
    JudicialRoutingModule
  ],
  exports: [
    JudicialHomeComponent
  ]
})
export class JudicialModule { }

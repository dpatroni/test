import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { ExtrajudicialRoutingModule } from './extrajudicial-routing-module';
import { ExtraJudicialHomeComponent } from './components/extrajudicial-home/extrajudicial-home';
import { ClienteEmpresaListExtraComponent } from './components/cliente-empresa-list-extra/cliente-empresa-list-extra';
import { ClienteMorosoGaranteListComponent } from './components/cliente-moroso-garante-list/cliente-moroso-garante-list';


@NgModule({
  declarations: [

  ],
  imports: [
    ExtraJudicialHomeComponent,
    ClienteEmpresaListExtraComponent,
    ClienteMorosoGaranteListComponent,
    CommonModule,
    FormsModule, // Add FormsModule here
    ExtrajudicialRoutingModule
  ],
  exports: [
    ExtraJudicialHomeComponent
  ]
})
export class ExtrajudicialModule { }

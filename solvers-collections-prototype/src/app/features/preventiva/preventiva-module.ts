import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreventivaRoutingModule } from './preventiva-routing-module';
import { PreventivaHomeComponent } from './components/preventiva-home/preventiva-home';
import { ClienteEmpresaListComponent } from './components/cliente-empresa-list/cliente-empresa-list';
import { ClienteMorosoListComponent } from './components/cliente-moroso-list/cliente-moroso-list';


@NgModule({
  declarations: [

  ],
  imports: [
    PreventivaHomeComponent,
    ClienteEmpresaListComponent,
    ClienteMorosoListComponent,
    CommonModule,
    PreventivaRoutingModule
  ],
  exports: [
    PreventivaHomeComponent // Since PreventivaHomeComponent is the entry point and might be used if this module is ever directly embedded.
  ]
})
export class PreventivaModule { }

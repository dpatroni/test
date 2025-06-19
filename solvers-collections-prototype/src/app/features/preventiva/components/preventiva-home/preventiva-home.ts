import { Component } from '@angular/core';
import { ClienteEmpresa } from '../../../../models/cliente-empresa.model';
import { ClienteMorosoListComponent } from '../cliente-moroso-list/cliente-moroso-list';
import { ClienteEmpresaListComponent } from '../cliente-empresa-list/cliente-empresa-list';

@Component({
  selector: 'app-preventiva-home',
  templateUrl: './preventiva-home.html',
  styleUrls: ['./preventiva-home.scss'],
  imports: [
    ClienteMorosoListComponent,
    ClienteEmpresaListComponent
  ]
})
export class PreventivaHomeComponent {
  selectedEmpresaId: string | null = null;

  onEmpresaSeleccionada(empresa: ClienteEmpresa): void {
    this.selectedEmpresaId = empresa.id;
    console.log('Empresa seleccionada en PreventivaHome:', empresa);
  }
}

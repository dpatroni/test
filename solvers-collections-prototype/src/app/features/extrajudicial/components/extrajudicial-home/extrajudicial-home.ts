import { Component } from '@angular/core';
import { ClienteEmpresa } from '../../../../models/cliente-empresa.model';
import { ClienteEmpresaListExtraComponent } from '../cliente-empresa-list-extra/cliente-empresa-list-extra';
import { ClienteMorosoGaranteListComponent } from '../cliente-moroso-garante-list/cliente-moroso-garante-list';

@Component({
  standalone: true,
  selector: 'app-extrajudicial-home',
  templateUrl: './extrajudicial-home.html',
  styleUrls: ['./extrajudicial-home.scss'],
  imports: [
    ClienteEmpresaListExtraComponent,
    ClienteMorosoGaranteListComponent]
})
export class ExtraJudicialHomeComponent {
  selectedEmpresaId: string | null = null;

  onEmpresaSeleccionada(empresa: ClienteEmpresa): void {
    this.selectedEmpresaId = empresa.id;
    console.log('Empresa seleccionada en ExtraJudicialHome:', empresa);
  }
}

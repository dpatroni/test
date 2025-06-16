import { Component } from '@angular/core';
import { ClienteEmpresa } from '../../../../models/cliente-empresa.model';

@Component({
  selector: 'app-extrajudicial-home',
  templateUrl: './extrajudicial-home.html',
  styleUrls: ['./extrajudicial-home.scss']
})
export class ExtraJudicialHomeComponent {
  selectedEmpresaId: string | null = null;

  onEmpresaSeleccionada(empresa: ClienteEmpresa): void {
    this.selectedEmpresaId = empresa.id;
    console.log('Empresa seleccionada en ExtraJudicialHome:', empresa);
  }
}

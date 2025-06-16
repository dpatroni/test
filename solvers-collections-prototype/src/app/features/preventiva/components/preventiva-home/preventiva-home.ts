import { Component } from '@angular/core';
import { ClienteEmpresa } from '../../../../models/cliente-empresa.model';

@Component({
  selector: 'app-preventiva-home',
  templateUrl: './preventiva-home.html',
  styleUrls: ['./preventiva-home.scss']
})
export class PreventivaHomeComponent {
  selectedEmpresaId: string | null = null;

  onEmpresaSeleccionada(empresa: ClienteEmpresa): void {
    this.selectedEmpresaId = empresa.id;
    console.log('Empresa seleccionada en PreventivaHome:', empresa);
  }
}

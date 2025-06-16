import { Component } from '@angular/core';
import { ClienteEmpresa } from '../../../../models/cliente-empresa.model';
import { ProcesoJudicial } from '../../../../models/proceso-judicial.model';

@Component({
  selector: 'app-judicial-home',
  templateUrl: './judicial-home.html',
  styleUrls: ['./judicial-home.scss']
})
export class JudicialHomeComponent {
  selectedEmpresaId: string | null = null;
  selectedProcesoJudicial: ProcesoJudicial | null = null;

  onEmpresaSeleccionada(empresa: ClienteEmpresa): void {
    this.selectedEmpresaId = empresa.id;
    this.selectedProcesoJudicial = null; // Reset detail when company changes
    console.log('Empresa seleccionada en JudicialHome:', empresa);
  }

  onCasoSeleccionado(proceso: ProcesoJudicial): void {
    this.selectedProcesoJudicial = proceso;
    console.log('Caso seleccionado en JudicialHome:', proceso);
  }
}

import { Component } from '@angular/core';
import { ClienteEmpresa } from '../../../../models/cliente-empresa.model';
import { ProcesoJudicial } from '../../../../models/proceso-judicial.model'; // Reusing the same model
import { ProcesoJudicialDetailOtrosComponent } from '../proceso-judicial-detail-otros/proceso-judicial-detail-otros.component';
import { CasoJudicialListOtrosComponent } from '../caso-judicial-list-otros/caso-judicial-list-otros.component';
import { ClienteEmpresaListOtrosComponent } from '../cliente-empresa-list-otros/cliente-empresa-list-otros.component';

@Component({
  selector: 'app-otros-procesos-home',
  templateUrl: './otros-procesos-home.component.html',
  styleUrls: ['./otros-procesos-home.component.scss'],
  imports: [
    ProcesoJudicialDetailOtrosComponent,
    CasoJudicialListOtrosComponent,
    ClienteEmpresaListOtrosComponent
  ]
})
export class OtrosProcesosHomeComponent {
  selectedEmpresaId: string | null = null;
  selectedProcesoJudicial: ProcesoJudicial | null = null;

  onEmpresaSeleccionada(empresa: ClienteEmpresa): void {
    this.selectedEmpresaId = empresa.id;
    this.selectedProcesoJudicial = null;
    console.log('Empresa seleccionada en OtrosProcesosHome:', empresa);
  }

  onCasoSeleccionado(proceso: ProcesoJudicial): void {
    this.selectedProcesoJudicial = proceso;
    console.log('Caso (Otro Proceso) seleccionado en OtrosProcesosHome:', proceso);
  }
}

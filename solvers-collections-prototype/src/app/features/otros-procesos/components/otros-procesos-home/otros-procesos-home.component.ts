import { Component } from '@angular/core';
import { ClienteEmpresa } from '../../../../models/cliente-empresa.model';
import { ProcesoJudicial } from '../../../../models/proceso-judicial.model'; // Reusing the same model

@Component({
  selector: 'app-otros-procesos-home',
  templateUrl: './otros-procesos-home.component.html',
  styleUrls: ['./otros-procesos-home.component.scss']
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

import { Component } from '@angular/core';
import { ClienteEmpresa } from '../../../../models/cliente-empresa.model';
import { ProcesoJudicial } from '../../../../models/proceso-judicial.model';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ClienteEmpresaListJudicialComponent } from '../cliente-empresa-list-judicial/cliente-empresa-list-judicial'; // Import child
import { CasoJudicialListComponent } from '../caso-judicial-list/caso-judicial-list'; // Import child
import { ProcesoJudicialDetailComponent } from '../proceso-judicial-detail/proceso-judicial-detail'; // Import child

@Component({
  selector: 'app-judicial-home',
  standalone: true, // Added standalone
  imports: [
    CommonModule,
    ClienteEmpresaListJudicialComponent, // Added child
    CasoJudicialListComponent,           // Added child
    ProcesoJudicialDetailComponent     // Added child
  ],
  templateUrl: './judicial-home.html',
  styleUrls: ['./judicial-home.scss']
})
export class JudicialHomeComponent {
  selectedEmpresaId: string | null = null;
  selectedProcesoJudicial: ProcesoJudicial | null = null;

  onEmpresaSeleccionada(empresa: ClienteEmpresa): void {
    this.selectedEmpresaId = empresa.id;
    this.selectedProcesoJudicial = null;
    console.log('Empresa seleccionada en JudicialHome:', empresa);
  }

  onCasoSeleccionado(proceso: ProcesoJudicial): void {
    this.selectedProcesoJudicial = proceso;
    console.log('Caso seleccionado en JudicialHome:', proceso);
  }
}

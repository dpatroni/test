import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProcesoJudicial } from '../../../../models/proceso-judicial.model';
import { CommonModule } from '@angular/common'; // Import CommonModule

const MOCK_PROCESOS_JUDICIALES: ProcesoJudicial[] = [
  { id: 'procJ1', idClienteEmpresa: 'empJ1', idClienteMoroso: 'morJ1', demandante: 'Financiera Confianza SA', demandado: 'Deudor Judicial Uno', corteSuperior: 'Corte Superior de Lima', tipoJuzgado: 'Juzgado Civil', numeroExpediente: '00123-2023-CI', tipoProcesoJudicialCobranzas: 'Ejecución de Garantías', etapaProcesal: 'Sentencia', situacionActual: 'Pendiente de ejecución', accionesPorActuar: 'Coordinar embargo' },
  { id: 'procJ2', idClienteEmpresa: 'empJ1', idClienteMoroso: 'morJ2', demandante: 'Financiera Confianza SA', demandado: 'Deudor Judicial Dos', corteSuperior: 'Corte Superior de Arequipa', tipoJuzgado: 'Juzgado Comercial', numeroExpediente: '00456-2023-CO', tipoProcesoJudicialCobranzas: 'Obligación de Dar Suma de Dinero', etapaProcesal: 'Apelación', situacionActual: 'Elevado a Sala', accionesPorActuar: 'Esperar resolución de Sala' },
  { id: 'procJ3', idClienteEmpresa: 'empJ2', idClienteMoroso: 'morJ3', demandante: 'Inversiones Seguras EIRL', demandado: 'Deudor Judicial Tres', corteSuperior: 'Corte Superior de Lima Norte', tipoJuzgado: 'Juzgado de Paz Letrado', numeroExpediente: '00789-2024-JP', tipoProcesoJudicialCobranzas: 'Ejecución de Títulos Valores', etapaProcesal: 'Demanda', situacionActual: 'Notificando al demandado', accionesPorActuar: 'Seguimiento de notificación' },
];

@Component({
  selector: 'app-caso-judicial-list',
  standalone: true, // Added standalone
  imports: [CommonModule], // Added CommonModule
  templateUrl: './caso-judicial-list.html',
  styleUrls: ['./caso-judicial-list.scss']
})
export class CasoJudicialListComponent implements OnInit, OnChanges {
  @Input() empresaId: string | null = null;
  @Output() casoSeleccionado = new EventEmitter<ProcesoJudicial>();

  nombreEmpresaSeleccionada: string | null = null;
  casosJudiciales: ProcesoJudicial[] = [];
  private allCasos: ProcesoJudicial[] = MOCK_PROCESOS_JUDICIALES;
  selectedCaso: ProcesoJudicial | null = null;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['empresaId'] && this.empresaId) {
      this.casosJudiciales = this.allCasos.filter(c => c.idClienteEmpresa === this.empresaId);
      this.nombreEmpresaSeleccionada = `Empresa ID: ${this.empresaId}`;
      this.selectedCaso = null;
      if(this.casosJudiciales.length > 0) {
        // this.seleccionarCaso(this.casosJudiciales[0]);
      } else {
        this.casoSeleccionado.emit(undefined);
      }
    } else if (!this.empresaId) {
      this.casosJudiciales = [];
      this.nombreEmpresaSeleccionada = null;
      this.selectedCaso = null;
      this.casoSeleccionado.emit(undefined);
    }
  }

  seleccionarCaso(caso: ProcesoJudicial): void {
    this.selectedCaso = caso;
    this.casoSeleccionado.emit(caso);
  }
}

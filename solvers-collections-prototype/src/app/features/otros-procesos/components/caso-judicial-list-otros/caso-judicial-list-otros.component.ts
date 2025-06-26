import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProcesoJudicial } from '../../../../models/proceso-judicial.model'; // Reusing
import { CommonModule } from '@angular/common'; // Import CommonModule

// Distinct Mock Data
const MOCK_OTROS_PROCESOS: ProcesoJudicial[] = [
  { id: 'procO1', idClienteEmpresa: 'empO1', idClienteMoroso: 'cliX1', demandante: 'Consultores Legales Max SAC', demandado: 'Empresa Constructora XYZ', corteSuperior: 'Corte Superior de Lima', tipoJuzgado: 'Juzgado Civil', numeroExpediente: 'OP-001-2023', tipoProcesoJudicialCobranzas: 'Incumplimiento de Contrato', etapaProcesal: 'Pruebas', situacionActual: 'Evaluando peritaje', accionesPorActuar: 'Presentar alegatos' },
  { id: 'procO2', idClienteEmpresa: 'empO2', idClienteMoroso: 'cliY2', demandante: 'Proveedor ABC', demandado: 'Grupo Constructor Andino SA', corteSuperior: 'Corte Superior de Callao', tipoJuzgado: 'Juzgado Comercial', numeroExpediente: 'OP-002-2024', tipoProcesoJudicialCobranzas: 'Contencioso Administrativo', etapaProcesal: 'Primera Instancia', situacionActual: 'Esperando sentencia', accionesPorActuar: 'Monitorear SICNET' },
  { id: 'procO3', idClienteEmpresa: 'empJ1', idClienteMoroso: 'cliZ3', demandante: 'Financiera Confianza SA', demandado: 'Ex-Empleado Z', corteSuperior: 'Corte Superior de Lima', tipoJuzgado: 'Juzgado Laboral', numeroExpediente: 'OP-003-2023', tipoProcesoJudicialCobranzas: 'Proceso Laboral', etapaProcesal: 'Conciliación', situacionActual: 'Audiencia programada', accionesPorActuar: 'Preparar propuesta conciliatoria'},
];
@Component({
  selector: 'app-caso-judicial-list-otros',
  standalone: true, // Added standalone
  imports: [CommonModule], // Added CommonModule
  templateUrl: './caso-judicial-list-otros.component.html',
  styleUrls: ['./caso-judicial-list-otros.component.scss']
})
export class CasoJudicialListOtrosComponent implements OnInit, OnChanges {
  @Input() empresaId: string | null = null;
  @Output() casoSeleccionado = new EventEmitter<ProcesoJudicial>();
  nombreEmpresaSeleccionada: string | null = null;
  casosJudiciales: ProcesoJudicial[] = [];
  private allCasos: ProcesoJudicial[] = MOCK_OTROS_PROCESOS;
  selectedCaso: ProcesoJudicial | null = null;
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['empresaId'] && this.empresaId) {
      this.casosJudiciales = this.allCasos.filter(c => c.idClienteEmpresa === this.empresaId);
      this.nombreEmpresaSeleccionada = `Empresa ID: ${this.empresaId}`;
      this.selectedCaso = null;
      if(this.casosJudiciales.length === 0) { this.casoSeleccionado.emit(undefined); }
    } else if (!this.empresaId) {
      this.casosJudiciales = []; this.nombreEmpresaSeleccionada = null; this.selectedCaso = null;
      this.casoSeleccionado.emit(undefined);
    }
  }
  seleccionarCaso(caso: ProcesoJudicial): void {
    this.selectedCaso = caso;
    this.casoSeleccionado.emit(caso);
  }
}

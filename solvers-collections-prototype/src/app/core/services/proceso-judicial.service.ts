import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProcesoJudicial } from '../../models/proceso-judicial.model';

const MOCK_PROCESOS_JUDICIALES_COBRANZA: ProcesoJudicial[] = [
  { id: 'procJ1', idClienteEmpresa: 'empJ1', idClienteMoroso: 'morJ1', demandante: 'Financiera Confianza SA', demandado: 'Deudor Judicial Uno (Cobranza)', corteSuperior: 'Corte Superior de Lima', tipoJuzgado: 'Juzgado Civil', numeroExpediente: '00123-2023-CI', tipoProcesoJudicialCobranzas: 'Ejecución de Garantías', etapaProcesal: 'Sentencia', situacionActual: 'Pendiente de ejecución', accionesPorActuar: 'Coordinar embargo', montoDemandado: 15000, fechaInicioProceso: new Date(2023, 0, 15) },
  { id: 'procJ2', idClienteEmpresa: 'empJ1', idClienteMoroso: 'morJ2', demandante: 'Financiera Confianza SA', demandado: 'Deudor Judicial Dos (Cobranza)', corteSuperior: 'Corte Superior de Arequipa', tipoJuzgado: 'Juzgado Comercial', numeroExpediente: '00456-2023-CO', tipoProcesoJudicialCobranzas: 'Obligación de Dar Suma de Dinero', etapaProcesal: 'Apelación', situacionActual: 'Elevado a Sala', accionesPorActuar: 'Esperar resolución de Sala', montoDemandado: 8500, fechaInicioProceso: new Date(2023, 2, 10) },
  { id: 'procJ3', idClienteEmpresa: 'empJ2', idClienteMoroso: 'morJ3', demandante: 'Inversiones Seguras EIRL', demandado: 'Deudor Judicial Tres (Cobranza)', corteSuperior: 'Corte Superior de Lima Norte', tipoJuzgado: 'Juzgado de Paz Letrado', numeroExpediente: '00789-2024-JP', tipoProcesoJudicialCobranzas: 'Ejecución de Títulos Valores', etapaProcesal: 'Demanda', situacionActual: 'Notificando al demandado', accionesPorActuar: 'Seguimiento de notificación', montoDemandado: 3200, fechaInicioProceso: new Date(2024, 0, 5) },
];

const MOCK_OTROS_PROCESOS_JUDICIALES: ProcesoJudicial[] = [
  { id: 'procO1', idClienteEmpresa: 'empO1', idClienteMoroso: 'cliX1', demandante: 'Consultores Legales Max SAC', demandado: 'Empresa Constructora XYZ (Otros Proc.)', corteSuperior: 'Corte Superior de Lima', tipoJuzgado: 'Juzgado Civil', numeroExpediente: 'OP-001-2023', tipoProcesoJudicialCobranzas: 'Incumplimiento de Contrato', etapaProcesal: 'Pruebas', situacionActual: 'Evaluando peritaje', accionesPorActuar: 'Presentar alegatos', montoDemandado: 50000, fechaInicioProceso: new Date(2023, 3, 20) },
  { id: 'procO2', idClienteEmpresa: 'empO2', idClienteMoroso: 'cliY2', demandante: 'Proveedor ABC', demandado: 'Grupo Constructor Andino SA (Otros Proc.)', corteSuperior: 'Corte Superior de Callao', tipoJuzgado: 'Juzgado Comercial', numeroExpediente: 'OP-002-2024', tipoProcesoJudicialCobranzas: 'Contencioso Administrativo', etapaProcesal: 'Primera Instancia', situacionActual: 'Esperando sentencia', accionesPorActuar: 'Monitorear SICNET', montoDemandado: 120000, fechaInicioProceso: new Date(2024, 1, 15) },
  { id: 'procO3', idClienteEmpresa: 'empJ1', idClienteMoroso: 'cliZ3', demandante: 'Financiera Confianza SA', demandado: 'Ex-Empleado Z (Otros Proc.)', corteSuperior: 'Corte Superior de Lima', tipoJuzgado: 'Juzgado Laboral', numeroExpediente: 'OP-003-2023', tipoProcesoJudicialCobranzas: 'Proceso Laboral', etapaProcesal: 'Conciliación', situacionActual: 'Audiencia programada', accionesPorActuar: 'Preparar propuesta conciliatoria', montoDemandado: 0, notas: "Proceso sin monto pecuniario directo." },
];


@Injectable({
  providedIn: 'root'
})
export class ProcesoJudicialService {
  constructor() { }

  getProcesosJudicialesCobranza(): Observable<ProcesoJudicial[]> {
    return of(MOCK_PROCESOS_JUDICIALES_COBRANZA);
  }

  getProcesosJudicialesCobranzaByEmpresa(empresaId: string): Observable<ProcesoJudicial[]> {
    return of(MOCK_PROCESOS_JUDICIALES_COBRANZA.filter(p => p.idClienteEmpresa === empresaId));
  }

  getOtrosProcesosJudiciales(): Observable<ProcesoJudicial[]> {
    return of(MOCK_OTROS_PROCESOS_JUDICIALES);
  }

  getOtrosProcesosJudicialesByEmpresa(empresaId: string): Observable<ProcesoJudicial[]> {
    return of(MOCK_OTROS_PROCESOS_JUDICIALES.filter(p => p.idClienteEmpresa === empresaId));
  }

  getProcesoJudicialById(id: string, tipo: 'cobranza' | 'otros'): Observable<ProcesoJudicial | undefined> {
    const source = tipo === 'cobranza' ? MOCK_PROCESOS_JUDICIALES_COBRANZA : MOCK_OTROS_PROCESOS_JUDICIALES;
    return of(source.find(p => p.id === id));
  }
}

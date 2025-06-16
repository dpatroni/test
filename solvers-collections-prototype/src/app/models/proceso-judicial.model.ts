export interface ProcesoJudicial {
  id: string;
  idClienteEmpresa: string;
  idClienteMoroso: string; // Could also be an array if multiple debtors in one case
  idGarantes?: string[];

  // Datos del proceso judicial
  corteSuperior?: string;
  tipoJuzgado?: string; // "Juzgado de Paz", "Juzgado Civil", "Juzgado Comercial", "Otros"
  nombreJuzgado?: string; // Specific name of the court, e.g., "1er Juzgado Civil de Lima"
  salasSuperiores?: string; // "Sala Civil", "Sala Comercial", "Otros"
  nombreSala?: string; // Specific name of the chamber
  corteSuprema?: boolean; // Does it reach Supreme Court?
  ubicacionCorteSuprema?: string; // If so, details

  // Partes
  demandante: string; // Could be ClienteEmpresa or SOLVERS itself
  demandado: string; // Usually ClienteMoroso

  // Tipo de proceso
  tipoProcesoJudicialCobranzas: string; // "Ejecución de Títulos Valores", "Ejecución de Garantías", etc.
  etapaProcesal: string;
  numeroExpediente: string;
  situacionActual: string;
  accionesPorActuar: string;

  // Tracking and other details
  fechaInicioProceso?: Date;
  montoDemandado?: number;
  abogadoEncargado?: string;
  notas?: string;
}

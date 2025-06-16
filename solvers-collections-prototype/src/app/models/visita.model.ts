export interface Visita {
  id: string;
  idClienteMoroso?: string;
  idGarante?: string;
  fechaHora: Date;
  cobradorEncargado: string;
  direccionVisita: string;
  resultado: string; // e.g., "Cliente no encontrado", "Acuerdo de pago", "Negativa de pago"
  notas?: string;
}

export interface Llamada {
  id: string;
  idClienteMoroso?: string; // Optional: if direct to debtor
  idGarante?: string; // Optional: if direct to guarantor
  fechaHora: Date;
  duracionMinutos: number;
  duracionSegundos: number;
  resultado: string; // e.g., "Contestó", "No contestó", "Número equivocado", "Acuerdo de pago"
  notas?: string;
}

export interface AcuerdoPago {
  id: string;
  idClienteMoroso: string;
  fechaAcuerdo: Date;
  montoTotalAcordado: number;
  numeroCuotas: number;
  montoCuota: number;
  fechaPrimeraCuota: Date;
  condiciones: string;
  estado: 'Vigente' | 'Incumplido' | 'Pagado';
  notas?: string;
}

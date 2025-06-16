export type ModeloCarta = 'Modelo 1' | 'Modelo 2' | 'Modelo 3' | 'Modelo 4';

export interface CartaCobranza {
  id: string;
  idClienteMoroso?: string;
  idGarante?: string;
  modelo: ModeloCarta;
  fechaEnvio: Date;
  direccionEnvio: string;
  resultado: string; // e.g., "Entregada", "Devuelta", "Recibida por tercero"
  notas?: string;
}

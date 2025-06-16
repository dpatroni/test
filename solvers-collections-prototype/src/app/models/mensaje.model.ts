export type TipoMensaje = 'SMS' | 'Email' | 'WhatsApp' | 'Otro';

export interface Mensaje {
  id: string;
  idClienteMoroso?: string;
  idGarante?: string;
  tipo: TipoMensaje;
  destino: string; // Phone number, email address, etc.
  contenido: string;
  fechaHoraEnvio: Date;
  resultado: string; // e.g., "Enviado", "Entregado", "Fallido", "Leído"
  notas?: string;
}

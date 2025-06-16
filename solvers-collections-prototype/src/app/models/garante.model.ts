import { Contacto } from './contacto.model';

export interface Garante {
  id: string;
  nombreCompleto: string;
  documentoIdentidad: string;
  contacto: Contacto;
}

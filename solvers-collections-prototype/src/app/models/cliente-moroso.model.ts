import { Contacto } from './contacto.model';
import { Garante } from './garante.model';

export interface ClienteMoroso {
  id: string;
  nombreCompleto: string;
  documentoIdentidad: string;
  contacto: Contacto;
  garantes?: Garante[];
  idClienteEmpresa: string; // Foreign key to ClienteEmpresa
  deudaTotal?: number;
  // Other debtor-specific details
}

import { Contacto } from './contacto.model';

export interface ClienteEmpresa {
  id: string;
  razonSocial: string;
  ruc: string;
  contactoPrincipal: Contacto;
  // Other company-specific details can be added here
}

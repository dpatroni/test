import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClienteEmpresa } from '../../models/cliente-empresa.model';

const MOCK_CLIENTES_EMPRESA: ClienteEmpresa[] = [
  { id: 'emp1', razonSocial: 'Empresa A SA', ruc: '20100000001', contactoPrincipal: { id: 'c1', domicilio: 'Av. Principal 123' } },
  { id: 'emp2', razonSocial: 'Servicios B SRL', ruc: '20200000002', contactoPrincipal: { id: 'c2', telefonos: ['987654321'] } },
  { id: 'emp3', razonSocial: 'Comercial C SAC', ruc: '20300000003', contactoPrincipal: { id: 'c3', correosElectronicos: ['contacto@comercialc.com'] } },
  { id: 'empX', razonSocial: 'Constructora X SA', ruc: '20400000004', contactoPrincipal: { id: 'c4'} },
  { id: 'empJ1', razonSocial: 'Financiera Confianza SA', ruc: '20500000005', contactoPrincipal: { id: 'cJ1' } },
  { id: 'empJ2', razonSocial: 'Inversiones Seguras EIRL', ruc: '20600000006', contactoPrincipal: { id: 'cJ2' } },
  { id: 'empO1', razonSocial: 'Consultores Legales Max SAC', ruc: '20700000007', contactoPrincipal: { id: 'cO1' } },
  { id: 'empO2', razonSocial: 'Grupo Constructor Andino SA', ruc: '20800000008', contactoPrincipal: { id: 'cO2' } }
];

@Injectable({
  providedIn: 'root'
})
export class ClienteEmpresaService {
  constructor() { }

  getClientesEmpresa(): Observable<ClienteEmpresa[]> {
    return of(MOCK_CLIENTES_EMPRESA);
  }

  getClienteEmpresaById(id: string): Observable<ClienteEmpresa | undefined> {
    return of(MOCK_CLIENTES_EMPRESA.find(e => e.id === id));
  }
}

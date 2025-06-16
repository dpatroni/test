import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClienteMoroso } from '../../models/cliente-moroso.model';
import { Garante } from '../../models/garante.model';
import { GaranteService } from './garante.service'; // To potentially populate guarantor details

// Using the same mock garantes from GaranteService for consistency
const MOCK_GARANTES_DATA: Garante[] = [
  { id: 'gar1', nombreCompleto: 'Garante Alfa Solidario', documentoIdentidad: '88888888', contacto: {id: 'cg1', domicilio: 'Calle Ficticia 456'} },
  { id: 'gar2', nombreCompleto: 'Garante Beta Principal', documentoIdentidad: '99999999', contacto: {id: 'cg2', telefonos: ['999888777']} },
];

const MOCK_CLIENTES_MOROSOS: ClienteMoroso[] = [
  // Preventiva
  { id: 'mor1', idClienteEmpresa: 'emp1', nombreCompleto: 'Deudor Uno Preventivo', documentoIdentidad: '11111111', contacto: {id: 'c4'}, deudaTotal: 500 },
  { id: 'mor2', idClienteEmpresa: 'emp1', nombreCompleto: 'Deudor Dos Preventivo', documentoIdentidad: '22222222', contacto: {id: 'c5'}, deudaTotal: 1200 },
  { id: 'mor3', idClienteEmpresa: 'emp2', nombreCompleto: 'Deudor Tres Preventivo', documentoIdentidad: '33333333', contacto: {id: 'c6'}, deudaTotal: 300 },
  // ExtraJudicial
  { id: 'morE1', idClienteEmpresa: 'emp1', nombreCompleto: 'Deudor Alpha ExtraJud', documentoIdentidad: '44444444', contacto: {id: 'cmE1'}, deudaTotal: 2500, garantes: [MOCK_GARANTES_DATA[0]] },
  { id: 'morE2', idClienteEmpresa: 'emp1', nombreCompleto: 'Deudor Beta ExtraJud', documentoIdentidad: '55555555', contacto: {id: 'cmE2'}, deudaTotal: 4800 },
  { id: 'morE3', idClienteEmpresa: 'emp2', nombreCompleto: 'Deudor Gamma ExtraJud', documentoIdentidad: '66666666', contacto: {id: 'cmE3'}, deudaTotal: 1500, garantes: [MOCK_GARANTES_DATA[1]] },
  { id: 'morE4', idClienteEmpresa: 'empX', nombreCompleto: 'Deudor Delta ExtraJud (Constructora)', documentoIdentidad: '77777777', contacto: {id: 'cmE4'}, deudaTotal: 10500, garantes: MOCK_GARANTES_DATA },
  // Judicial / Otros (these are more abstract, linked by ProcesoJudicial)
  // For simplicity, ClienteMorosoService will focus on those directly linked for Preventiva/Extrajudicial.
  // Judicial cases will primarily use ProcesoJudicialService which contains moroso/demandado names.
];

@Injectable({
  providedIn: 'root'
})
export class ClienteMorosoService {
  constructor(private garanteService: GaranteService) { } // Example of service dependency if needed

  getClientesMorosos(): Observable<ClienteMoroso[]> {
    return of(MOCK_CLIENTES_MOROSOS);
  }

  getClientesMorososByEmpresa(empresaId: string): Observable<ClienteMoroso[]> {
    return of(MOCK_CLIENTES_MOROSOS.filter(m => m.idClienteEmpresa === empresaId));
  }

  getClienteMorosoById(id: string): Observable<ClienteMoroso | undefined> {
    return of(MOCK_CLIENTES_MOROSOS.find(m => m.id === id));
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Garante } from '../../models/garante.model';

const MOCK_GARANTES: Garante[] = [
  { id: 'gar1', nombreCompleto: 'Garante Alfa Solidario', documentoIdentidad: '88888888', contacto: {id: 'cg1', domicilio: 'Calle Ficticia 456'} },
  { id: 'gar2', nombreCompleto: 'Garante Beta Principal', documentoIdentidad: '99999999', contacto: {id: 'cg2', telefonos: ['999888777']} },
];

@Injectable({
  providedIn: 'root'
})
export class GaranteService {
  constructor() { }

  getGarantes(): Observable<Garante[]> {
    return of(MOCK_GARANTES);
  }

  getGaranteById(id: string): Observable<Garante | undefined> {
    return of(MOCK_GARANTES.find(g => g.id === id));
  }
}

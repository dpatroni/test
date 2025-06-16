import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClienteEmpresa } from '../../../../models/cliente-empresa.model';
// Distinct Mock Data
const MOCK_CLIENTES_EMPRESA_OTROS: ClienteEmpresa[] = [
  { id: 'empO1', razonSocial: 'Consultores Legales Max SAC', ruc: '20700000007', contactoPrincipal: { id: 'cO1' } },
  { id: 'empO2', razonSocial: 'Grupo Constructor Andino SA', ruc: '20800000008', contactoPrincipal: { id: 'cO2' } },
  { id: 'empJ1', razonSocial: 'Financiera Confianza SA (Otros Proc.)', ruc: '20500000005', contactoPrincipal: {id: 'cJ1'} }
];
@Component({
  selector: 'app-cliente-empresa-list-otros',
  templateUrl: './cliente-empresa-list-otros.component.html',
  styleUrls: ['./cliente-empresa-list-otros.component.scss']
})
export class ClienteEmpresaListOtrosComponent implements OnInit {
  @Output() empresaSeleccionada = new EventEmitter<ClienteEmpresa>();
  clientesEmpresa: ClienteEmpresa[] = MOCK_CLIENTES_EMPRESA_OTROS;
  selectedEmpresa: ClienteEmpresa | null = null;
  ngOnInit(): void {}
  seleccionarEmpresa(empresa: ClienteEmpresa): void {
    this.selectedEmpresa = empresa;
    this.empresaSeleccionada.emit(empresa);
  }
}

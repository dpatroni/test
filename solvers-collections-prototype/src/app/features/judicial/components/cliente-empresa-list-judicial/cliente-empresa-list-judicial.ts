import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClienteEmpresa } from '../../../../models/cliente-empresa.model';
const MOCK_CLIENTES_EMPRESA_JUD: ClienteEmpresa[] = [
  { id: 'empJ1', razonSocial: 'Financiera Confianza SA', ruc: '20500000005', contactoPrincipal: { id: 'cJ1' } },
  { id: 'empJ2', razonSocial: 'Inversiones Seguras EIRL', ruc: '20600000006', contactoPrincipal: { id: 'cJ2' } },
  { id: 'emp1', razonSocial: 'Empresa A SA (Judicial)', ruc: '20100000001', contactoPrincipal: { id: 'c1'} }
];
@Component({
  selector: 'app-cliente-empresa-list-judicial',
  templateUrl: './cliente-empresa-list-judicial.html',
  styleUrls: ['./cliente-empresa-list-judicial.scss']
})
export class ClienteEmpresaListJudicialComponent implements OnInit {
  @Output() empresaSeleccionada = new EventEmitter<ClienteEmpresa>();
  clientesEmpresa: ClienteEmpresa[] = MOCK_CLIENTES_EMPRESA_JUD;
  selectedEmpresa: ClienteEmpresa | null = null;
  ngOnInit(): void {}
  seleccionarEmpresa(empresa: ClienteEmpresa): void {
    this.selectedEmpresa = empresa;
    this.empresaSeleccionada.emit(empresa);
  }
}

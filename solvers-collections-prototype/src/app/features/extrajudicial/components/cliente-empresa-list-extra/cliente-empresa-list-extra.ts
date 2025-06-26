import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClienteEmpresa } from '../../../../models/cliente-empresa.model';
import { CommonModule } from '@angular/common'; // Import CommonModule

// Mock data for now
const MOCK_CLIENTES_EMPRESA_EXTRA: ClienteEmpresa[] = [
  { id: 'emp1', razonSocial: 'Empresa A SA (ExtraJud)', ruc: '20100000001', contactoPrincipal: { id: 'c1' } },
  { id: 'emp2', razonSocial: 'Servicios B SRL (ExtraJud)', ruc: '20200000002', contactoPrincipal: { id: 'c2' } },
  { id: 'empX', razonSocial: 'Constructora X SA', ruc: '20400000004', contactoPrincipal: { id: 'c4'} },
];

@Component({
  selector: 'app-cliente-empresa-list-extra',
  standalone: true, // Added standalone
  imports: [CommonModule], // Added CommonModule for *ngFor etc.
  templateUrl: './cliente-empresa-list-extra.html',
  styleUrls: ['./cliente-empresa-list-extra.scss']
})
export class ClienteEmpresaListExtraComponent implements OnInit {
  @Output() empresaSeleccionada = new EventEmitter<ClienteEmpresa>();
  clientesEmpresa: ClienteEmpresa[] = [];
  selectedEmpresa: ClienteEmpresa | null = null;

  ngOnInit(): void {
    this.clientesEmpresa = MOCK_CLIENTES_EMPRESA_EXTRA;
  }

  seleccionarEmpresa(empresa: ClienteEmpresa): void {
    this.selectedEmpresa = empresa;
    this.empresaSeleccionada.emit(empresa);
  }
}

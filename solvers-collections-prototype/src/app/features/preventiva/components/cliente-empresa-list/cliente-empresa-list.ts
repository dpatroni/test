import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClienteEmpresa } from '../../../../models/cliente-empresa.model';
import { ClienteEmpresaService } from '../../../../core/services/cliente-empresa.service';
import { CommonModule } from '@angular/common'; // Import CommonModule

// Mock data array removed

@Component({
  selector: 'app-cliente-empresa-list',
  standalone: true, // Added standalone
  imports: [CommonModule], // Added CommonModule for *ngFor etc.
  templateUrl: './cliente-empresa-list.html',
  styleUrls: ['./cliente-empresa-list.scss']
})
export class ClienteEmpresaListComponent implements OnInit {
  @Output() empresaSeleccionada = new EventEmitter<ClienteEmpresa>();
  clientesEmpresa: ClienteEmpresa[] = [];
  selectedEmpresa: ClienteEmpresa | null = null;

  constructor(private clienteEmpresaService: ClienteEmpresaService) { }

  ngOnInit(): void {
    this.clienteEmpresaService.getClientesEmpresa().subscribe(data => {
      this.clientesEmpresa = data;
    });
  }

  seleccionarEmpresa(empresa: ClienteEmpresa): void {
    this.selectedEmpresa = empresa;
    this.empresaSeleccionada.emit(empresa);
    console.log('Empresa seleccionada:', empresa);
  }
}

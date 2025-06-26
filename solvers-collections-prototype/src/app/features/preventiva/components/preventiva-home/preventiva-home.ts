import { Component } from '@angular/core';
import { ClienteEmpresa } from '../../../../models/cliente-empresa.model';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ClienteEmpresaListComponent } from '../cliente-empresa-list/cliente-empresa-list'; // Import child component
import { ClienteMorosoListComponent } from '../cliente-moroso-list/cliente-moroso-list';   // Import child component

@Component({
  selector: 'app-preventiva-home',
  standalone: true, // Added standalone
  imports: [
    CommonModule,
    ClienteEmpresaListComponent, // Add imported child component
    ClienteMorosoListComponent    // Add imported child component
  ],
  templateUrl: './preventiva-home.html',
  styleUrls: ['./preventiva-home.scss']
})
export class PreventivaHomeComponent {
  selectedEmpresaId: string | null = null;

  onEmpresaSeleccionada(empresa: ClienteEmpresa): void {
    this.selectedEmpresaId = empresa.id;
    console.log('Empresa seleccionada en PreventivaHome:', empresa);
  }
}

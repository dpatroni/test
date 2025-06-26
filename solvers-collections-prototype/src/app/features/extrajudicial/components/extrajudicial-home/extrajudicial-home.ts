import { Component } from '@angular/core';
import { ClienteEmpresa } from '../../../../models/cliente-empresa.model';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ClienteEmpresaListExtraComponent } from '../cliente-empresa-list-extra/cliente-empresa-list-extra'; // Import child
import { ClienteMorosoGaranteListComponent } from '../cliente-moroso-garante-list/cliente-moroso-garante-list'; // Import child

@Component({
  selector: 'app-extrajudicial-home',
  standalone: true, // Added standalone
  imports: [
    CommonModule,
    ClienteEmpresaListExtraComponent, // Added child
    ClienteMorosoGaranteListComponent  // Added child
  ],
  templateUrl: './extrajudicial-home.html',
  styleUrls: ['./extrajudicial-home.scss']
})
export class ExtraJudicialHomeComponent {
  selectedEmpresaId: string | null = null;

  onEmpresaSeleccionada(empresa: ClienteEmpresa): void {
    this.selectedEmpresaId = empresa.id;
    console.log('Empresa seleccionada en ExtraJudicialHome:', empresa);
  }
}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ClienteMoroso } from '../../../../models/cliente-moroso.model';
import { Llamada } from '../../../../models/llamada.model';
import { Mensaje, TipoMensaje } from '../../../../models/mensaje.model';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';   // Import FormsModule

// Mock data (still used as per subtask scope for this component)
const MOCK_CLIENTES_MOROSOS: ClienteMoroso[] = [
  { id: 'mor1', idClienteEmpresa: 'emp1', nombreCompleto: 'Deudor Uno Preventivo', documentoIdentidad: '11111111', contacto: {id: 'c4'}, deudaTotal: 500 },
  { id: 'mor2', idClienteEmpresa: 'emp1', nombreCompleto: 'Deudor Dos Preventivo', documentoIdentidad: '22222222', contacto: {id: 'c5'}, deudaTotal: 1200 },
  { id: 'mor3', idClienteEmpresa: 'emp2', nombreCompleto: 'Deudor Tres Preventivo', documentoIdentidad: '33333333', contacto: {id: 'c6'}, deudaTotal: 300 },
];

@Component({
  selector: 'app-cliente-moroso-list',
  standalone: true, // Added standalone
  imports: [CommonModule, FormsModule], // Added CommonModule, FormsModule
  templateUrl: './cliente-moroso-list.html',
  styleUrls: ['./cliente-moroso-list.scss']
})
export class ClienteMorosoListComponent implements OnInit, OnChanges {
  @Input() empresaId: string | null = null;
  nombreEmpresaSeleccionada: string | null = null;

  clientesMorosos: ClienteMoroso[] = [];
  private allClientesMorosos: ClienteMoroso[] = MOCK_CLIENTES_MOROSOS;

  llamadasLog: Llamada[] = [];
  mensajesLog: Mensaje[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['empresaId'] && this.empresaId) {
      this.clientesMorosos = this.allClientesMorosos.filter(m => m.idClienteEmpresa === this.empresaId);
      this.nombreEmpresaSeleccionada = `Empresa ID: ${this.empresaId}`; // This would ideally come from ClienteEmpresaService
      this.llamadasLog = [];
      this.mensajesLog = [];
    } else if (!this.empresaId) {
      this.clientesMorosos = [];
      this.nombreEmpresaSeleccionada = null;
    }
  }

  simularLlamada(moroso: ClienteMoroso): void {
    const resultado = prompt(`Simulando llamada a ${moroso.nombreCompleto}. Ingrese resultado (ej: Contestó, No contestó):`, "Contestó");
    if (resultado) {
      const nuevaLlamada: Llamada = {
        id: `call${Date.now()}`,
        idClienteMoroso: moroso.id,
        fechaHora: new Date(),
        duracionMinutos: Math.floor(Math.random() * 10),
        duracionSegundos: Math.floor(Math.random() * 60),
        resultado: resultado,
        notas: 'Llamada de cobranza preventiva simulada'
      };
      this.llamadasLog.push(nuevaLlamada);
      console.log('Llamada simulada:', nuevaLlamada);
    }
  }

  simularMensaje(moroso: ClienteMoroso): void {
    const tipoMensaje = prompt(`Simulando mensaje a ${moroso.nombreCompleto}. Ingrese tipo (SMS, Email, WhatsApp):`, "SMS") as TipoMensaje;
    const resultado = prompt(`Ingrese resultado del mensaje (ej: Enviado, Entregado, Fallido):`, "Enviado");

    if (tipoMensaje && resultado) {
      const nuevoMensaje: Mensaje = {
        id: `msg${Date.now()}`,
        idClienteMoroso: moroso.id,
        tipo: tipoMensaje,
        destino: 'Destino Simulado',
        contenido: 'Recordatorio de pago preventivo.',
        fechaHoraEnvio: new Date(),
        resultado: resultado,
        notas: 'Mensaje preventivo simulado'
      };
      this.mensajesLog.push(nuevoMensaje);
      console.log('Mensaje simulado:', nuevoMensaje);
    }
  }

  getNombreMoroso(morosoId?: string): string {
    if (!morosoId) return 'N/A';
    const moroso = this.allClientesMorosos.find(m => m.id === morosoId);
    return moroso ? moroso.nombreCompleto : 'Desconocido';
  }
}

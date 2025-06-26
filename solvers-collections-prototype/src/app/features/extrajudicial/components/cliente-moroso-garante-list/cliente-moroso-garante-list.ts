import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ClienteMoroso } from '../../../../models/cliente-moroso.model';
import { Garante } from '../../../../models/garante.model';
import { Llamada } from '../../../../models/llamada.model';
import { Mensaje, TipoMensaje } from '../../../../models/mensaje.model';
import { CartaCobranza, ModeloCarta } from '../../../../models/carta-cobranza.model';
import { Visita } from '../../../../models/visita.model';
import { AcuerdoPago } from '../../../../models/acuerdo-pago.model';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';   // Import FormsModule

// Mock Data
const MOCK_GARANTES: Garante[] = [
  { id: 'gar1', nombreCompleto: 'Garante Alfa', documentoIdentidad: '88888888', contacto: {id: 'cg1'} },
  { id: 'gar2', nombreCompleto: 'Garante Beta', documentoIdentidad: '99999999', contacto: {id: 'cg2'} },
];

const MOCK_CLIENTES_MOROSOS_EXTRA: ClienteMoroso[] = [
  { id: 'morE1', idClienteEmpresa: 'emp1', nombreCompleto: 'Deudor Alpha ExtraJud', documentoIdentidad: '44444444', contacto: {id: 'cmE1'}, deudaTotal: 2500, garantes: [MOCK_GARANTES[0]] },
  { id: 'morE2', idClienteEmpresa: 'emp1', nombreCompleto: 'Deudor Beta ExtraJud', documentoIdentidad: '55555555', contacto: {id: 'cmE2'}, deudaTotal: 4800 },
  { id: 'morE3', idClienteEmpresa: 'emp2', nombreCompleto: 'Deudor Gamma ExtraJud', documentoIdentidad: '66666666', contacto: {id: 'cmE3'}, deudaTotal: 1500, garantes: [MOCK_GARANTES[1]] },
  { id: 'morE4', idClienteEmpresa: 'empX', nombreCompleto: 'Deudor Delta ExtraJud', documentoIdentidad: '77777777', contacto: {id: 'cmE4'}, deudaTotal: 10500, garantes: MOCK_GARANTES },
];

interface ClienteMorosoConGarantes {
  moroso: ClienteMoroso;
}
type TargetType = 'moroso' | 'garante';
interface LogItem {
  idTarget: string;
  tipoTarget: TargetType;
}
interface LlamadaLog extends Llamada, LogItem {}
interface MensajeLog extends Mensaje, LogItem {}
interface CartaLog extends CartaCobranza, LogItem {}
interface VisitaLog extends Visita, LogItem {}


@Component({
  selector: 'app-cliente-moroso-garante-list',
  standalone: true, // Added standalone
  imports: [CommonModule, FormsModule], // Added CommonModule, FormsModule
  templateUrl: './cliente-moroso-garante-list.html',
  styleUrls: ['./cliente-moroso-garante-list.scss']
})
export class ClienteMorosoGaranteListComponent implements OnInit, OnChanges {
  @Input() empresaId: string | null = null;
  nombreEmpresaSeleccionada: string | null = null;

  clientesMorososConGarantes: ClienteMorosoConGarantes[] = [];
  private allMorosos: ClienteMoroso[] = MOCK_CLIENTES_MOROSOS_EXTRA;
  private allGarantes: Garante[] = MOCK_GARANTES;

  llamadasLog: LlamadaLog[] = [];
  mensajesLog: MensajeLog[] = [];
  cartasLog: CartaLog[] = [];
  visitasLog: VisitaLog[] = [];
  acuerdosPagoLog: AcuerdoPago[] = [];

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['empresaId'] && this.empresaId) {
      const filteredMorosos = this.allMorosos.filter(m => m.idClienteEmpresa === this.empresaId);
      this.clientesMorososConGarantes = filteredMorosos.map(m => ({ moroso: m }));
      this.nombreEmpresaSeleccionada = `Empresa ID: ${this.empresaId}`;
      this.clearLogs();
    } else if (!this.empresaId) {
      this.clientesMorososConGarantes = [];
      this.nombreEmpresaSeleccionada = null;
    }
  }

  clearLogs() {
    this.llamadasLog = []; this.mensajesLog = []; this.cartasLog = [];
    this.visitasLog = []; this.acuerdosPagoLog = [];
  }

  getTargetNombre(id: string, tipo: TargetType): string {
    let target;
    if (tipo === 'moroso') target = this.allMorosos.find(m => m.id === id);
    else target = this.allGarantes.find(g => g.id === id);
    return target ? target.nombreCompleto : 'Desconocido';
  }

  getNombreMoroso(morosoId?: string): string {
    if (!morosoId) return 'N/A';
    const moroso = this.allMorosos.find(m => m.id === morosoId);
    return moroso ? moroso.nombreCompleto : 'Desconocido';
  }

  simularLlamada(targetId: string, tipoTarget: TargetType): void {
    const nombre = this.getTargetNombre(targetId, tipoTarget);
    const resultado = prompt(`Simulando llamada a ${tipoTarget} ${nombre}. Resultado:`, "Acuerdo verbal");
    if (resultado) {
      this.llamadasLog.push({
        id: `call${Date.now()}`, idTarget: targetId, tipoTarget,
        fechaHora: new Date(), duracionMinutos: 5, duracionSegundos: 30, resultado,
        [tipoTarget === 'moroso' ? 'idClienteMoroso' : 'idGarante']: targetId
      });
    }
  }

  simularMensaje(targetId: string, tipoTarget: TargetType): void {
    const nombre = this.getTargetNombre(targetId, tipoTarget);
    const tipoMsg = prompt(`Tipo de mensaje para ${tipoTarget} ${nombre} (SMS, Email, WhatsApp):`, "WhatsApp") as TipoMensaje;
    const resultado = prompt(`Resultado del mensaje:`, "Entregado y leído");
    if (tipoMsg && resultado) {
      this.mensajesLog.push({
        id: `msg${Date.now()}`, idTarget: targetId, tipoTarget, tipo: tipoMsg, destino: 'Simulado',
        contenido: 'Notificación extrajudicial', fechaHoraEnvio: new Date(), resultado,
        [tipoTarget === 'moroso' ? 'idClienteMoroso' : 'idGarante']: targetId
      });
    }
  }

  simularCarta(targetId: string, tipoTarget: TargetType): void {
    const nombre = this.getTargetNombre(targetId, tipoTarget);
    const modelo = prompt(`Modelo de carta para ${tipoTarget} ${nombre} (Modelo 1, 2, 3, 4):`, "Modelo 1") as ModeloCarta;
    const resultado = prompt(`Resultado del envío de carta:`, "Entregada");
    if (modelo && resultado) {
      this.cartasLog.push({
        id: `carta${Date.now()}`, idTarget: targetId, tipoTarget, modelo,
        fechaEnvio: new Date(), direccionEnvio: 'Dirección Simulada', resultado,
        [tipoTarget === 'moroso' ? 'idClienteMoroso' : 'idGarante']: targetId
      });
    }
  }

  registrarVisita(targetId: string, tipoTarget: TargetType): void {
    const nombre = this.getTargetNombre(targetId, tipoTarget);
    const resultado = prompt(`Resultado de la visita a ${tipoTarget} ${nombre}:`, "Cliente no encontrado");
    if (resultado) {
      this.visitasLog.push({
        id: `visita${Date.now()}`, idTarget: targetId, tipoTarget,
        fechaHora: new Date(), cobradorEncargado: 'Cobrador Simulado',
        direccionVisita: 'Dirección Visitada Simulada', resultado,
        [tipoTarget === 'moroso' ? 'idClienteMoroso' : 'idGarante']: targetId
      });
    }
  }

  registrarAcuerdoPago(morosoId: string): void {
    const nombre = this.getNombreMoroso(morosoId);
    const monto = prompt(`Monto del acuerdo para ${nombre}:`, "1000");
    const estado = prompt(`Estado del acuerdo (Vigente, Incumplido, Pagado):`, "Vigente") as 'Vigente' | 'Incumplido' | 'Pagado';
    if (monto && estado) {
      this.acuerdosPagoLog.push({
        id: `acuerdo${Date.now()}`, idClienteMoroso: morosoId,
        fechaAcuerdo: new Date(), montoTotalAcordado: parseFloat(monto),
        numeroCuotas: 1, montoCuota: parseFloat(monto), fechaPrimeraCuota: new Date(),
        condiciones: 'Condiciones simuladas', estado
      });
    }
  }
}

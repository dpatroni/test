import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProcesoJudicial } from '../../../../models/proceso-judicial.model'; // Reusing model
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-proceso-judicial-detail-otros',
  standalone: true, // Added standalone
  imports: [CommonModule], // Added CommonModule for pipes
  templateUrl: './proceso-judicial-detail-otros.component.html',
  styleUrls: ['./proceso-judicial-detail-otros.component.scss']
})
export class ProcesoJudicialDetailOtrosComponent implements OnChanges {
  @Input() proceso: ProcesoJudicial | null = null;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['proceso']) {
      console.log("Otro Proceso judicial detail updated:", this.proceso);
    }
  }
}

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProcesoJudicial } from '../../../../models/proceso-judicial.model'; // Reusing model
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-proceso-judicial-detail-otros',
  templateUrl: './proceso-judicial-detail-otros.component.html',
  styleUrls: ['./proceso-judicial-detail-otros.component.scss'],
  imports: [
    CommonModule
  ]
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

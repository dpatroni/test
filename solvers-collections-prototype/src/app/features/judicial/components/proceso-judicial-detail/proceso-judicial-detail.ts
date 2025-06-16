import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProcesoJudicial } from '../../../../models/proceso-judicial.model';

@Component({
  selector: 'app-proceso-judicial-detail',
  templateUrl: './proceso-judicial-detail.html',
  styleUrls: ['./proceso-judicial-detail.scss']
})
export class ProcesoJudicialDetailComponent implements OnChanges {
  @Input() proceso: ProcesoJudicial | null = null;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['proceso']) {
      console.log("Proceso judicial detail updated:", this.proceso);
    }
  }
}

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProcesoJudicial } from '../../../../models/proceso-judicial.model';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-proceso-judicial-detail',
  standalone: true, // Added standalone
  imports: [CommonModule], // Added CommonModule for pipes
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

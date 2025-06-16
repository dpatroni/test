import { Routes } from '@angular/router';
// PlaceholderPreventivaComponent import removed
// PlaceholderExtrajudicialComponent import removed
// PlaceholderJudicialComponent import removed
// PlaceholderOtrosProcesosComponent import removed

export const routes: Routes = [
  { path: 'preventiva', loadChildren: () => import('./features/preventiva/preventiva-module').then(m => m.PreventivaModule) },
  { path: 'extrajudicial', loadChildren: () => import('./features/extrajudicial/extrajudicial-module').then(m => m.ExtrajudicialModule) },
  { path: 'judicial', loadChildren: () => import('./features/judicial/judicial-module').then(m => m.JudicialModule) },
  { path: 'otros-procesos', loadChildren: () => import('./features/otros-procesos/otros-procesos.module').then(m => m.OtrosProcesosModule) },
  { path: '', redirectTo: '/preventiva', pathMatch: 'full' }
];

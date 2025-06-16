import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtrosProcesosHomeComponent } from './components/otros-procesos-home/otros-procesos-home.component';

const routes: Routes = [ { path: '', component: OtrosProcesosHomeComponent } ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtrosProcesosRoutingModule { }

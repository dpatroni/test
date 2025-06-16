import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JudicialHomeComponent } from './components/judicial-home/judicial-home';

const routes: Routes = [ { path: '', component: JudicialHomeComponent } ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JudicialRoutingModule { }

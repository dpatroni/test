import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtraJudicialHomeComponent } from './components/extrajudicial-home/extrajudicial-home';

const routes: Routes = [
  { path: '', component: ExtraJudicialHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtrajudicialRoutingModule { }

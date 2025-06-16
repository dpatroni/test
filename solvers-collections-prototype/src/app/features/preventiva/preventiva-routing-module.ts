import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreventivaHomeComponent } from './components/preventiva-home/preventiva-home';

const routes: Routes = [
  { path: '', component: PreventivaHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreventivaRoutingModule { }

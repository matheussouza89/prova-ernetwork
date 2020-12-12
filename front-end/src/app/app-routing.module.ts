import { CidadeComponent } from './views/cidade/form-list/cidade.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cidade', component: CidadeComponent},
  { path: 'cidade/novo', component: CidadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

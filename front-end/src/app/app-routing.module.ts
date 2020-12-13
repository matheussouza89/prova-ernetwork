import { HomeComponent } from './views/home/home.component';
import { ClienteComponent } from './views/cliente/form-list/cliente.component';
import { CidadeComponent } from './views/cidade/form-list/cidade.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cidade', component: CidadeComponent},
  { path: 'cliente', component: ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

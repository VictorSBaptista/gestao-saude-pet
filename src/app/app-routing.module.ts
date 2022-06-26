import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandPageComponent } from './land-page/land-page.component';
import { CuidadosBasicosComponent } from './cuidados-basicos/cuidados-basicos.component';
import { CadastrarPetComponent } from './cadastrar-pet/cadastrar-pet.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: LandPageComponent },
  { path: 'cadastrar-pet', component: CadastrarPetComponent },
  { path: 'cuidados-basicos', component: CuidadosBasicosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

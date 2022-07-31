import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './util/authentication.guard';
import { CityComponent } from './admin/city/city.component';
import { DraftComponent } from './draft/draft.component';
import { LandPageComponent } from './land-page/land-page.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { OperationDetailComponent } from './operation-detail/operation-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { CuidadosBasicosComponent } from './cuidados-basicos/cuidados-basicos.component';
import { CadastrarPetComponent } from './cadastrar-pet/cadastrar-pet.component';

const routes: Routes = [
  { path: 'inicio', component: LandPageComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'a/usuarios',
    component: UserComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'a/cidades',
    component: CityComponent,
    canActivate: [AuthenticationGuard],
  },

  { path: 'cadastrar-pet', component: CadastrarPetComponent},
  { path: 'cuidados-basicos', component: CuidadosBasicosComponent },
  { path: 'extrato/detalhes/:id', component: OperationDetailComponent },
  { path: 'nao-autorizado', component: NotauthorizedComponent },
  { path: 'rascunho', component: DraftComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  providers: [AuthenticationGuard],
})
export class AppRoutingModule {}

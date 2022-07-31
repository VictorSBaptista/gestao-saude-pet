import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BalancePanelComponent } from './shared/balance-panel/balance-panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { CityComponent } from './admin/city/city.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { DraftComponent } from './draft/draft.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandPageComponent } from './land-page/land-page.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ModalComponent } from './shared/modal/modal.component';
import { NgModule } from '@angular/core';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { OperationDetailComponent } from './operation-detail/operation-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TotalUsersComponent } from './user/total-users/total-users.component';
import { UserComponent } from './user/user.component';
import { CuidadosBasicosComponent } from './cuidados-basicos/cuidados-basicos.component';
import { CadastrarPetComponent } from './cadastrar-pet/cadastrar-pet.component';
import { TotalPetsComponent } from './cadastrar-pet/total-pets/total-pets.component';

// import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
// import ptBr from '@angular/common/locales/pt';
// import { registerLocaleData } from '@angular/common';

//registerLocaleData(ptBr);

@NgModule({
  declarations: [
    ExponentialStrengthPipe,
    AppComponent,
    MenuComponent,
    FooterComponent,
    LandPageComponent,
    LoginComponent,
    BalancePanelComponent,
    ModalComponent,
    PageNotFoundComponent,
    OperationDetailComponent,
    UserComponent,
    NotauthorizedComponent,
    TotalUsersComponent,
    CpfPipe,
    DraftComponent,
    CityComponent,
    CuidadosBasicosComponent,
    CadastrarPetComponent,
    TotalPetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  //providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

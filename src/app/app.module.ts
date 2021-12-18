import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoixDeStagesParSpecialiteComponent } from './choix-de-stages-par-specialite/choix-de-stages-par-specialite.component';
import { IndexSiteComponent } from './index-site/index-site.component';
import { InterfaceAdminComponent } from './interface-admin/interface-admin.component';
import { LoginBootstrapStyleComponent } from './login-bootstrap-style/login-bootstrap-style.component';
import { PagePrincipaleDuStageSelectionneComponent } from './page-principale-du-stage-selectionne/page-principale-du-stage-selectionne.component';
import { SignupFormBootstrapComponent } from './signup-form-bootstrap/signup-form-bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoixDeStagesParSpecialiteComponent,
    IndexSiteComponent,
    InterfaceAdminComponent,
    LoginBootstrapStyleComponent,
    PagePrincipaleDuStageSelectionneComponent,
    SignupFormBootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

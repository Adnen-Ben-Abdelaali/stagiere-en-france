import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexSiteComponent} from "./index-site/index-site.component";
import {ChoixDeStagesParSpecialiteComponent} from "./choix-de-stages-par-specialite/choix-de-stages-par-specialite.component";
import {InterfaceAdminComponent} from "./interface-admin/interface-admin.component";
import {LoginBootstrapStyleComponent} from "./login-bootstrap-style/login-bootstrap-style.component";
import {PagePrincipaleDuStageSelectionneComponent} from "./page-principale-du-stage-selectionne/page-principale-du-stage-selectionne.component";
import {SignupFormBootstrapComponent} from "./signup-form-bootstrap/signup-form-bootstrap.component";

const routes: Routes = [

  {
    path:'choixDeStagesParSpecialite', component: ChoixDeStagesParSpecialiteComponent
  },
  {
    path:'indexSite', component: IndexSiteComponent
  },
  {
    path:'interfaceAdmin', component: InterfaceAdminComponent
  },
  {
    path:'loginBootstrapStyle', component: LoginBootstrapStyleComponent
  },
  {
    path:'pagePrincipaleDuStageSelectionne', component: PagePrincipaleDuStageSelectionneComponent
  },
  {
    path:'signupFormBootstrap', component: SignupFormBootstrapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

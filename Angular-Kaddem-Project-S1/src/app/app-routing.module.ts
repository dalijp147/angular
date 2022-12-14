import { UniversiteComponent } from './pages/admin/universite/universite.component';
import { DepartementComponent } from './pages/admin/departement/departement.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/admin/contact/contact.component';
import { RegisterComponent } from './pages/admin/register/register.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { ErrorComponent } from './pages/admin/error/error.component';
import { ContratComponent } from './pages/admin/contrat/contrat.component';
import { AddContratComponent } from './pages/admin/contrat/add-contrat/add-contrat.component';
import {EquipeComponent} from "./pages/admin/equipe/equipe.component";
import {AddEquipeComponent} from "./pages/admin/equipe/add-equipe/add-equipe.component";
import { AdddetailequipeComponent } from './pages/admin/detailequipe/adddetailequipe/adddetailequipe.component';
import { DetailequipeComponent } from './pages/admin/detailequipe/detailequipe.component';
import { UpdateetailequipeComponent } from './pages/admin/detailequipe/updateetailequipe/updateetailequipe.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'contrat', component: ContratComponent },
  { path: 'departement', component: DepartementComponent },
  { path: 'departements', loadChildren: () => import('./pages/admin/departements/departements.module').then(m => m.DepartementsModule) },
  { path: 'universite', component: UniversiteComponent },
  { path: 'addcontrat', component: AddContratComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'addequipe', component: AddEquipeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'detailequipe', component: DetailequipeComponent, children:[
    { path: 'adddetailequipe', component: AdddetailequipeComponent },
    { path: 'editdetailequipe', component: UpdateetailequipeComponent },
  ] },

  { path: 'equipes', loadChildren: () => import('./pages/admin/equipes/equipes.module').then(m => m.EquipesModule) },

  { path: 'profile', component: ProfileComponent },
  { path: 'departements', loadChildren: () => import('./pages/admin/departements/departements.module').then(m => m.DepartementsModule) },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

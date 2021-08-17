import { ProfileComponent } from './components/views/profile/profile.component';
import { NewQuestionsComponent } from './components/views/new-questions/new-questions.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { QuestionsComponent } from './components/views/questions/questions.component';
import { HomeLoginComponent } from './components/views/home-login/home-login.component';
import { HomeRegisterComponent } from './components/views/home-register/home-register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'registro',
    component: HomeRegisterComponent
  },
  {
    path: 'login',
    component: HomeLoginComponent
  },
  {
    path: '',
    component: QuestionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'NovaPergunta',
    component: NewQuestionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

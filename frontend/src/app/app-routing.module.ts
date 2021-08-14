import { QuestionsComponent } from './components/views/questions/questions.component';
import { HomeLoginComponent } from './components/views/home-login/home-login.component';
import { HomeRegisterComponent } from './components/views/home-register/home-register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeRegisterComponent
  },
  {
    path: 'login',
    component: HomeLoginComponent
  },
  {
    path: 'perguntas',
    component: QuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

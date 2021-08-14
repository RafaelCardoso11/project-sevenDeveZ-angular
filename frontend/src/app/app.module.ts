
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { HomeLoginComponent } from './components/views/home-login/home-login.component';
import { HomeRegisterComponent } from './components/views/home-register/home-register.component';
import { QuestionsComponent } from './components/views/questions/questions.component';
import { NewQuestionsComponent } from './components/views/new-questions/new-questions.component';
import { AboutComponent } from './components/views/home-register/about/about.component';
import { FormComponent } from './components/views/home-register/form/form.component';
import { InputComponent } from './components/templates/microTemplates/input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeLoginComponent,
    HomeRegisterComponent,
    FooterComponent,
    QuestionsComponent,
    NewQuestionsComponent,
    AboutComponent,
    FormComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

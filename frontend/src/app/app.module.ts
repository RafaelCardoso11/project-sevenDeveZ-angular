
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';


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
    InputComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';

import {AppComponent} from './components/app/app.component';
import {UserComponent} from './components/user/user.component';
import {MainComponent} from './components/main/main.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {EmailFormComponent} from './components/email-form/email-form.component';
import {PasswordFormComponent} from './components/password-form/password-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MainComponent,
    LoginFormComponent,
    EmailFormComponent,
    PasswordFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken',
    }),
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'some',
        component: UserComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

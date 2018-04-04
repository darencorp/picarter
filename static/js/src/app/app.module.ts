import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { CookieService } from 'ngx-cookie-service';

import {AppComponent} from './components/app/app.component';
import {MainComponent} from './components/main/main.component';
import {LoginFormComponent} from './components/forms/login-form/login-form.component';
import {EmailFormComponent} from './components/forms/email-form/email-form.component';
import {PasswordFormComponent} from './components/forms/password-form/password-form.component';
import { LibraryComponent } from './components/library/library.component';
import { AccountComponent } from './components/account/account.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginFormComponent,
    EmailFormComponent,
    PasswordFormComponent,
    LibraryComponent,
    AccountComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken',
    }),
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'library',
        component: LibraryComponent
      },
      {
        path: 'account',
        component: AccountComponent
      }
    ], {useHash: true}),
    NgxPermissionsModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

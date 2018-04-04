import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgxPermissionsService} from "ngx-permissions";
import {AppComponent} from "../../app/app.component";
import {$} from "protractor";

declare var UIkit: any;


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email: string;
  password: string;

  constructor(private http: HttpClient, private router: Router, private permissionsService: NgxPermissionsService, private app: AppComponent) {
  }

  ngOnInit() {
  }

  signIn() {
    this.http.post("/login", {email: this.email, password: this.password}).subscribe((res) => {
      if (res['status'] == true) {
        location.reload()
      }
    });
  }

  openEmailForm() {
    UIkit.modal("#email-form-l").show();
  }

}

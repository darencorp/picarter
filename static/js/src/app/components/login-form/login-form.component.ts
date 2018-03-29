import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
declare var UIkit : any;


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email: string;
  password: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  signIn() {
    this.http.post("/login", {email: this.email, password: this.password}).subscribe((res) => {
      if (res['status'] == true) {
        UIkit.modal("#login-form-l").hide()
        // this.router.navigateByUrl('/some', { skipLocationChange: true })
      }
    })
  }

  openEmailForm() {
    UIkit.modal("#email-form-l").show()
  }

}

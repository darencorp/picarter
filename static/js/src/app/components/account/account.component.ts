import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

declare var UIkit: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


  is_logged_in = false;

  constructor(private cookieService: CookieService) {
  }

  ngOnInit() {
    this.is_logged_in = this.cookieService.check("user")
  }

  openLoginForm() {
    UIkit.modal("#login-form-l").show()
  }

  openEmailForm() {
    UIkit.modal("#email-form-l").show()
  }
}

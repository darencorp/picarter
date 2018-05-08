import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppComponent} from "../app/app.component";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {UserService} from "../../services/user.service";
import {DomSanitizer} from "@angular/platform-browser";
declare var UIkit: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: {'class': 'uk-width-1-1'},
  providers: [UserService]
})
export class HeaderComponent implements OnInit {

  is_logged_in = false;

  constructor(private user: UserService, private sanitizer: DomSanitizer, private http: HttpClient, private  app: AppComponent, private router: Router, private cookieService: CookieService) {
  }

  ngOnInit() {
    this.is_logged_in = this.cookieService.check("user")
  }

  logout() {
    this.http.post("/logout", {}).subscribe((res) => {
      this.app.updatePermissions()
      location.reload()
    })
  }

  openLoginForm() {
    UIkit.modal("#login-form-l").show()
  }

  changeRoute(route) {
    this.router.navigateByUrl(route)
  }

  getUrl() {
    return this.sanitizer.bypassSecurityTrustStyle('url(' + this.user.url + ')');
  }
}

import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  fname = '';
  lname = '';
  email = '';
  avatar = '';
  url = '';

  constructor(private cookieService: CookieService, private http: HttpClient) {
    if (this.cookieService.check("user")) {
      this.http.post('/user', {}).subscribe(res => {
        this.fname = res['user'].fname;
        this.lname = res['user'].lname;
        this.email = res['user'].email;
        this.avatar = res['user'].avatar;
        this.url = '/static/img/users/' + this.email + '/' + this.avatar;
      })
    }
  }

}

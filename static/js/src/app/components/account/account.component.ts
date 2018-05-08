import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {UserService} from "../../services/user.service";

declare var UIkit: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [UserService]
})
export class AccountComponent implements OnInit {

  is_logged_in = false;
  edit = false;

  fname = '';
  lname = '';

  constructor(private user: UserService, private sanitizer: DomSanitizer, private cookieService: CookieService, private http: HttpClient) {
  }

  ngOnInit() {
    this.is_logged_in = this.cookieService.check("user");
  }

  openLoginForm() {
    UIkit.modal("#login-form-l").show()
  }

  openEmailForm() {
    UIkit.modal("#email-form-l").show()
  }

  editProfile() {
    this.edit = !this.edit;

    this.lname = this.user.lname;
    this.fname = this.user.fname;
  }

  changeName() {
    this.http.post('/change_name', {'fname': this.fname, 'lname': this.lname}).subscribe(res => {
      this.user.fname = this.fname;
      this.user.lname = this.lname;
      this.edit = false;
    })
  }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = () => {
        let fd = new FormData();

        fd.append('img', file);

        this.http.post("/change_avatar", fd).subscribe((res) => {
          location.reload()
        })
      };
    }
  }

  getUrl() {
    return this.sanitizer.bypassSecurityTrustStyle('url(' + this.user.url + ')');
  }

}

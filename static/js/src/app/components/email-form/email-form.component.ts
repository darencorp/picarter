import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
declare var UIkit : any;

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  email: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }


  openPasswordForm() {
    this.http.post('/check_email', {email: this.email}).subscribe((res) => {
      if (res['status']) {
        UIkit.modal("#password-form-l").show();
      }
    });
  }
}

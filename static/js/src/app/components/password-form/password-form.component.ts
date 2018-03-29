import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent implements OnInit {

  password: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  signUp() {
    this.http.post('/register', {password: this.password}).subscribe((res) => {
      console.log(res);
    });
  }
}

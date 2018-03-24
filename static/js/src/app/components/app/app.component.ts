import {Component} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var UIkit : any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  q = ''

  constructor(private sanitizer: DomSanitizer) {
  }


  title = 'app';

  photos = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
  ];

  updateUrl(url) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(/static/img/${url})`);
  }

  openLoginForm() {
    UIkit.modal("#login-form-l").show()
  }

  signIn() {
    console.log("asdfghjkl")
  }
}

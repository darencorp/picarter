import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {NgxPermissionsService, NgxRolesService} from 'ngx-permissions';
import {Router} from "@angular/router";
import {AppComponent} from "../app/app.component";

declare var UIkit: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, private http: HttpClient, private router: Router,
              private permissionsService: NgxPermissionsService, private app: AppComponent) {
  }

  ngOnInit() {
    this.app.updatePermissions()
  }

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
    return this.sanitizer.bypassSecurityTrustStyle('url(/static/img/' + url + ')');
  }
}

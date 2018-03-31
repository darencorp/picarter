import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgxPermissionsService} from "ngx-permissions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(private http: HttpClient, private permissionsService: NgxPermissionsService){}

  ngOnInit() {

  }
}

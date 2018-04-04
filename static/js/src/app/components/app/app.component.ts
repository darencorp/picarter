import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgxPermissionsService} from "ngx-permissions";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from "@angular/router";
import {emit} from "cluster";
import {AccountComponent} from "../account/account.component";
import {SharedService} from "../../services/shared.service";
declare var UIkit: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedService]
})

export class AppComponent implements OnInit {

  loading = true;

  constructor(private sharedService: SharedService, private http: HttpClient, private permissionsService: NgxPermissionsService, private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }

  ngOnInit() {
    this.updatePermissions();
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true
    }
    if (event instanceof NavigationEnd) {
      this.loading = false
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.loading = false
    }
  }

  public updatePermissions() {
    this.permissionsService.flushPermissions();

    this.http.post('/permissions', {}).subscribe((res) => {
      if (res['status']) {
        this.permissionsService.loadPermissions(res['permissions']);
      }
    })
  }
}

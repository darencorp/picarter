import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  scroll = (): void => {
    //handle your scroll here
    //notice the 'odd' function assignment to a class field
    //this is used to be able to remove the event listener

    console.log("scrolling")
  };
}

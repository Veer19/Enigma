import { Component } from '@angular/core';

import { Router, Event, NavigationEnd} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  showBackArrow: boolean;
  hideToolbar: boolean;
  constructor(
    private router: Router,
    private afAuth:AngularFireAuth,
    private db: AngularFireDatabase,
  ){
    

    
    this.router.events.subscribe((event:Event) => {

      if (event instanceof NavigationEnd) {
        //Sending these variables to the toolbar component
        this.showBackArrow = (router.url!="/dashboard");
        this.hideToolbar = (router.url=="/")
      }

    })
  }
}

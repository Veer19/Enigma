import { Component, OnInit } from '@angular/core';
import { appRoutes } from '../routes';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-previous-button',
  templateUrl: './previous-button.component.html',
  styleUrls: ['./previous-button.component.css']
})
export class PreviousButtonComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    console.log(appRoutes.slice().reverse());
  }
  navPrev(){
    var i=0;  
    
    appRoutes.slice().reverse().forEach(route => {
      if(i==1){
        this.router.navigateByUrl(route.path);
        i=0;
      }
      if(this.router.url == ("/"+(route.path))){
        i=1;
      }
    });
  }
}

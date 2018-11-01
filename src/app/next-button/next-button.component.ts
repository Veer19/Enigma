import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { appRoutes } from '../routes';

@Component({
  selector: 'app-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.css']
})
export class NextButtonComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {    
    
  }
  navNext(){
    var i=0;  
    appRoutes.forEach(route => {
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

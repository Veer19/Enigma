import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-to-phone',
  templateUrl: './back-to-phone.component.html',
  styleUrls: ['./back-to-phone.component.css']
})
export class BackToPhoneComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  navPhone (){
    this.router.navigate(["phone"]);
  }

}

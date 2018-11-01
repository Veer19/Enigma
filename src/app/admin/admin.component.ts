import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  users;
  constructor(
    private db:AngularFireDatabase
  ) { }

  ngOnInit() {
    this.db.list("allUsers").valueChanges().subscribe(users=>{
      this.users = users;
    })

  }
  adminLoggedIn;
  loginAsAdmin(passAns){
    this.db.object("adminpass").valueChanges().subscribe(pass =>{
      if(pass == passAns){
        this.adminLoggedIn = true;
      }
    })
  }
  startEvent(){
    this.db.object("eventStarted").set(true);
    this.db.object("eventFinished").set(false);
  }
  haltEvent(){
    this.db.object("eventStarted").set(false);
  }
  stopEvent(){
    this.db.object("eventFinished").set(true);
  }

}

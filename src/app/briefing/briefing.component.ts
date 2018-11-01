import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-briefing',
  templateUrl: './briefing.component.html',
  styleUrls: ['./briefing.component.css']
})
export class BriefingComponent implements OnInit {
  brief_opened:boolean;
  started: boolean;
  showLoader:boolean= true;
  constructor(
    private afAuth:AngularFireAuth,
    private db:AngularFireDatabase,
    private router:Router
  ) { }
  messages = [
    'ATTENTION!!',
    'This is to bring to your notice that all the Aadhar details of the citizens have been hacked!', 
    'All the government officials agreed upon you being the only one who could solve it and get things under control! We have very limited time and expect you to take over the mission as soon as possible. We have a car waiting outside for you to go to the first suspect location!! Do no waste time, it is a mater of national security.'
  ]
  currentLevel;
  progressDetected:boolean = false;
  uid;
  
  userDataExists:boolean = false;
  ngOnInit() {

    this.afAuth.user.subscribe(user=>{
      this.uid  = user.uid;
    })
    this.db.object("eventStarted").valueChanges().subscribe(started=>{
      if(started == true){
        this.started = true;
      }
      this.showLoader = false;
    }) 
  }
  startMission(){
    
    this.router.navigate(['/1']);
  }
}

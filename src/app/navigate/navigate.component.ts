import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private db:AngularFireDatabase,
    private router: Router
  ) { }
  uid;
  navigateTo;
  wrongLocation = false;
  isLevel2Unlocked;
  ngOnInit() {
    this.afAuth.user.subscribe(user=>{
      this.uid = user.uid;
      this.db.object("allUsers/"+this.uid+"/level").valueChanges().subscribe(level=>{
        if(level=="2"){
          this.isLevel2Unlocked = true;
        }
      })
    })
  }
  navigateSubmit(locationAns){

    locationAns = locationAns.toLowerCase();
    locationAns = locationAns.replace(/\s/g,'');
    
    this.db.list("answers/navigateLocation").valueChanges().subscribe(locations =>{
      var c=false;
      locations.forEach(locationName=>{
        if(locationName==locationAns){
          c=true;
        }
      })
      if(c){
        this.db.object("allUsers/"+this.uid+"/level").set(2);
        this.db.object("allUsers/"+this.uid+"/answers/location").set({
          'ans':locationAns,
          'time':Date()
        }).then(callback =>{
          this.router.navigateByUrl("2");
        })
        this.wrongLocation = false;
      }
      else{
        this.wrongLocation = true;
      }
      
    })
  }

}

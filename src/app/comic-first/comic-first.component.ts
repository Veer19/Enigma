import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';

@Component({
  selector: 'app-comic-first',
  templateUrl: './comic-first.component.html',
  styleUrls: ['./comic-first.component.css']
})
export class ComicFirstComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.afAuth.user.subscribe(user=>{
      this.db.object("allUsers/"+user.uid).set({
        'name':user.displayName,
        'email':user.email,
        'level':1,
        "answers" : {
          "browser" : {
            "ansCode" : "-",
            "ansUsername" : "-",
            "time" : ""
          },
          "cancellationCode" : {
            "ans" : "-",
            "time" : ""
          },
          "computerPass" : {
            "ans" : "-",
            "time" : ""
          },
          "location" : {
            "ans" : "-",
            "time" : ""
          },
          "name" : {
            "ans" : "-",
            "time" : ""
          },
          "pattern" : {
            "ans" : "-",
            "time" : ""
          },
          "picture" : {
            "size" : "-",
            "time" : ""
          }
        },
      })
    })
    
  }

}

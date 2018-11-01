import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private afAuth:AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) { }
  displayName;
  photoURL;
  showHeader:boolean = false;
  ngOnInit() {

    
    this.afAuth.user.subscribe(user=>{
      this.db.object("eventFinished").valueChanges().subscribe(finished=>{
        if(this.router.url!="/admin" && this.router.url!="/finished"){
          if(finished==true){
            this.router.navigate(["failed"]);
          }
        }
        
      })
      console.log(user);
      this.displayName = user.displayName;
      this.photoURL = user.photoURL;
      console.log(this.photoURL);
      this.showHeader = true;
    })
    
  }
  logout(){
    console.log("Loggingout");
    this.afAuth.auth.signOut();
    console.log(this.afAuth.auth.currentUser);
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {MatSnackBar} from '@angular/material';
import { auth } from 'firebase';
import { Router } from '@angular/router';

import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private db:AngularFireDatabase,
    private router: Router,
    private snackBar:MatSnackBar
  ) { }
  showLoader:boolean = false;
  forgotPasswordWindowIsOpen:boolean = false;
  emailForForgotPass;
  ngOnInit() {
    
  }
  loginWithGoogle(){
    this.afAuth.auth.signInWithPopup(
      new auth.GoogleAuthProvider()
    )
    .then(user =>{
      this.db.object("allUsers/"+user.user.uid).set({
        name:user.user.displayName,
        email: user.user.email
      }).then(callback=>{
        this.router.navigate(['']);
      })
    });
  }
 /* login(email, password){
    //Firebase Login
    this.showLoader = true;
    if(email==null ||password== null){
      this.showLoader = false;
      this.snackBar.open("Enter your details","", {
        duration: 3000,
      });
      return;
    }
    this.afAuth.auth.signInWithEmailAndPassword(email,password)
    .then(user =>{
      console.log(email);
      this.showLoader = false;
      // When we have the user object, redirect to the dashboard
      this.router.navigate(['/briefing']);
    })
    .catch(error=>{
      //Display Error Message
      //Put this message into a snackbar later
      this.showLoader = false;
      
      this.snackBar.open(error.message,"", {
        duration: 3000,
      });
      console.log(error.message);
    });
    
  }
  sendPasswordResetLink(email){
    this.afAuth.auth.sendPasswordResetEmail(email);
    this.snackBar.open("Password Reset Link Sent","", {
      duration: 3000,
    });
  }
  */
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.afAuth.authState.subscribe(user=>{

      //Checking if user has logged in
      
      if(user===null){
        // If not, redirect to the login page
        return this.router.navigate(['/login']);
      }
    });
    //If yes, allow navigation
    return true;
    
  }
}
/*
@Injectable({
  providedIn: 'root'
})

export class LevelGuard implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth, 
    private router: Router,
    private db:AngularFireDatabase ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.afAuth.authState.subscribe(user=>{
      this.db.object("allUsers/"+user.uid).valueChanges().subscribe(userObj=>{
        if(userObj['level'] != 2){
          console.log("Here");
          // If not, redirect to the login page
          return this.router.navigate(['/1']);
        }
      })

      //Checking if user has logged in
      
    });
    //If yes, allow navigation
    return true;
    
  }
}

@Injectable({
  providedIn: 'root'
})
export class FinishedGuard implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth, 
    private router: Router,
    private db:AngularFireDatabase ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.afAuth.authState.subscribe(user=>{
      this.db.object("allUsers/"+user.uid).valueChanges().subscribe(userObj=>{
        if(userObj['level'] != "finished"){
          // If not, redirect to the login page
          return this.router.navigate(['/1']);
        }
      })
    });
    //If yes, allow navigation
    return true;
    
  }
  
}
*/
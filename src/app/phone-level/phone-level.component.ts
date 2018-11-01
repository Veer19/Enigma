import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import {Router} from '@angular/router';

@Component({
  selector: 'app-phone-level',
  templateUrl: './phone-level.component.html',
  styleUrls: ['./phone-level.component.css']
})
export class PhoneLevelComponent implements OnInit {
  wrongName: boolean;
  wrongNameMessage: string;
  nameVerified: boolean;
  showImageLoader: boolean;
  imageVerified: boolean;
  wrongImageMessage: string;
  loaderValue: number;
  wrongCodeMessage: any;
  finalCancellationCode: string;
  currentTime: () => string;
  encryptedName = "EISDSLOAEOLTNRN";
  patternRiddle = "I'm a dividing line at an edge; a squiggle of land with rock or ledge. I stretch out far and sometimes wide, but you'll stay dry if you pick the other side. You sometimes sit against me in the heat; I send tides to wash your feet.  But remember, should they ever choose to rise, those who leave surely are wise.";
  lastRiddle = "You force heaven to be empty";
  helpMessage: string;
  imageSize: {};
  kiddingMessage: string;
  constructor(
    private afAuth:AngularFireAuth,
    private db:AngularFireDatabase,
    private storage:AngularFireStorage,
    private router:Router
  ) { }
  uid;
  unlocked: boolean; //Make it false to lock screen later
  one = false;
  pattern = "";
  dots = [1,2,3,4,5,6,7,8,9];
  wrongAlert;
  noOfAttempts = 5;
  circle;
  openMessage;
  openGallery;
  openBrowser;
  
  location = "ab>bhd0 °14 , gf>fdaa °5";
  ip = "@%#>@$(>@%%>*%";
  
  hackerImg;
  downloadedImg;

  timer;
  browserUnlockCode;
  wrongBrowserCode;
  browserUnlocked;

  verificationImage:File = null;
  ngOnInit() {   
    
    this.db.object("answers/picture").valueChanges().subscribe(picSize =>{
      this.imageSize = picSize;
    })
    this.afAuth.user.subscribe(user=>{
      this.uid = user.uid;
      this.db.object("allUsers/"+this.uid+"/answers/pattern").valueChanges().subscribe(pattern=>{
        if(pattern["ans"] != "-"){
          this.unlocked = true;
        }
      })
    })

  }
  select(number){
    document.getElementById(number).style.background = "#0078D7";
    var c=0;
    for(var  i =0;i<this.pattern.length;i++){
      if(this.pattern.charAt(i) == number+""){
        c=1;
      }
    }
    if(c==0){
      this.pattern = this.pattern + ""+ number;
    }
    
  }
  submitPattern(){
    console.log(this.pattern);
    this.db.object("answers/pattern").valueChanges().subscribe(patternAns =>{

      if(this.pattern == patternAns){
        this.unlocked = true;
        this.db.object("allUsers/"+this.uid+"/answers/pattern").set({
          'ans': this.pattern,
          "time": Date()
        })
      }
      else{
        
        if(this.noOfAttempts>0){
          this.wrongAlert = "Wrong PIN, You have "+this.noOfAttempts+" attempts left";
          this.noOfAttempts--;
        }
        else{
          this.noOfAttempts--;
          this.wrongAlert = "Just kidding, you can try all you want xD";
        }
        
        
        this.resetPattern()
      }
    })
  }
  resetPattern(){
    this.circle = document.getElementsByClassName("circle");
    for (var i = 0; i < this.circle.length; i++) {
      this.circle[i].style.background="white";
    }
    this.pattern = "";
  }
  submitBrowserCode(usernameAns,codeAns){
    usernameAns = usernameAns.toLowerCase();
    usernameAns = usernameAns.replace(/\s/g,'');
    
    this.db.object("answers/browser").valueChanges().subscribe(usernameAndCode=>{
      console.log(usernameAndCode);
      if(codeAns == usernameAndCode['code'] && usernameAns == usernameAndCode['username']){
        this.db.object("allUsers/"+this.uid+"/answers/browser").set({
          'ansCode':codeAns,
          'ansUsername':usernameAns,
          "time": Date()
        }).then(callback=>{
          this.wrongBrowserCode = "";
          this.browserUnlocked = true;
        })
      }
      else{
        this.wrongBrowserCode = "Wrong Combination, try again.";
      }
    })
  }
  verifyName(nameAns){
    
    nameAns = nameAns.toLowerCase();
    nameAns = nameAns.replace(/\s/g,'');
    
    this.db.list("answers/name").valueChanges().subscribe(names =>{
      var c=false;
      names.forEach(name=>{
        if(name==nameAns){
          c=true;
        }
      })
      if(c){
        this.db.object("allUsers/"+this.uid+"/answers/name").set({
          'ans':nameAns,
          'time':Date()
        }).then(callback =>{
          this.nameVerified = true;
          console.log("Done");
        })
        this.wrongName = false;
        this.wrongNameMessage = "";

      }
      else{
        this.wrongName = true;
        this.wrongNameMessage = "Name not verified!";
      }
      
    })

  }
  
  verifyImage(){
    if(this.verificationImage.size==this.imageSize){
      this.db.object("allUsers/"+this.uid+"/answers/picture").set({
        'size':this.imageSize,
        'time':Date()
      }).then(callback=>{
          this.db.object("allUsers/"+this.uid).valueChanges().subscribe(user=>{
            if(user["loaderValue"] != undefined){
              this.loaderValue = user["loaderValue"];
            }
            else{
              this.db.object("allUsers/"+this.uid+"/loaderValue").set(0);
            }
          })
          this.imageVerified = true;
          this.wrongImageMessage = "";
          this.timer  = setInterval(() => {
            this.loaderValue = this.loaderValue + 1;
            this.db.object("allUsers/"+this.uid+"/loaderValue").set(this.loaderValue);
              if(this.loaderValue==100){
                this.db.object("allUsers/"+this.uid+"/loaderValue").set(0);
                clearInterval(this.timer);
                this.kiddingMessage = "Just kidding, take all the time you need";
              }
          }, 3000);
        })

    }
    else{
      this.wrongImageMessage = "Facial Verification Failed"
    }
    
  
  }




  

  //RECTIFY THIS ERROR
  //Runs whenever the user selects a picture.
  onFileChange($event){
    // Setting the this.picture variable as the file uploaded. We use this variable in the verifyImage() funtion
    this.verificationImage = $event.target.files[0];
}

  resetPhoneIcons(){
    this.openMessage = false;
    this.openGallery = false;
    this.openBrowser = false;
  }
  submitCancellationCode(codeAns){
    
    codeAns = codeAns.toLowerCase();
    codeAns = codeAns.replace(/\s/g,'');
    this.db.object("answers/cancellationCode").valueChanges().subscribe(code=>{
      if(code==codeAns){
        this.db.object("allUsers/"+this.uid+"/answers/cancellationCode").set({
          'ans':codeAns,
          'time':Date()
        }).then(callback=>{
          this.db.object("allUsers/"+this.uid+"/level").set("completed").then(callback=>{
            clearInterval(this.timer);
            this.router.navigate(["completed"])
          })
        })
      }
      else{
        this.finalCancellationCode = "";
        this.wrongCodeMessage ="Invalid Code";
      }
    })
  }

}

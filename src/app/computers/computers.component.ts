import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {
  
  computerOpened: boolean;
  fakeComputerOpened: boolean;
  computerPassVerified: boolean;
  computerUnlocked: boolean;
  fileDownloaded:boolean;
  wrongPasswordMessage: string;
  uid: string;

  constructor(
    private router:Router,
    private db:AngularFireDatabase,
    private afAuth:AngularFireAuth
  ) { }
  computers = [
    "202.200.190.196",
    "75.98.157.183",
    "9.254.16.107",
    "130.248.86.213",
    "96.180.245.101",
    "21.209.214.189",
    "184.101.245.216",
    "57.82.160.204",
    "93.101.159.62",
    "39.143.219.5",
    '253.249.255.85',
    "168.154.139.80",
    "222.118.108.254",
    "169.249.226.27",
    "56.198.62.202",
    "90.141.104.89",
    "115.165.187.73",
    "221.206.85.105",
    "93.82.133.83",
    '253.240.253.85',
    '253.259.260.85',
    '253.249.223.85',
    '253.219.225.85',
    '253.145.255.85',
    '253.256.255.85',
    '253.268.256.86',
    '253.264.257.85',
    '253.266.285.85',
    '253.249.225.85',
    '253.249.424.85',
    '253.249.246.85',
    '253.249.245.85',
    '253.249.226.85',
    '253.249.244.85',
    '253.249.278.85',
    '253.249.213.85',
    '253.249.274.85',
    "50.58.173.123",
    "153.200.210.24",
    "204.68.0.229",
    "250.75.68.240",
    "122.7.144.158",
    "116.203.18.170",
    "234.60.234.80",
    "233.219.166.26",
    "57.119.171.224",
    "242.19.210.174",
    "160.148.63.234",
    "170.68.189.114",
    "84.198.231.108",
    "167.69.74.63",
    "159.91.134.146",
    "195.187.167.217",
    "253.5.65.60",
    "193.224.144.150",
    "65.114.155.136"
  ]    
  computerPassAns;
  ngOnInit() {
    this.afAuth.user.subscribe(user=>{
      this.uid = user.uid;
    })

  }
  verifyComputerPass(ans){
    this.db.object("answers/computerPass").valueChanges().subscribe(pass=>{
      if(ans==pass){
        
        this.db.object("allUsers/"+this.uid+"/answers/computerPass").set({
          'ans':ans,
          'time':Date()
        }).then(callback=>{
          this.computerUnlocked = true;
        })
      }
      else{
        this.wrongPasswordMessage = "Wrong Password";
        
      }
    })
    
  }
  openComputer(computer){
    this.wrongPasswordMessage = "";
    if(computer==this.computers[10]){
      this.computerOpened = true;
      this.fakeComputerOpened= false;
    }
    else{
      this.fakeComputerOpened= true;
      this.computerOpened = false;
    }

  }
}

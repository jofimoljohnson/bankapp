import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim='your perfect banking partner'
  acnt="enter your ac number"
  pswd="enter your password"
  acno=''
  pswrd=''



  userDetails:any={
    1000:{acno:1000,username:"Jofi",password:123,balance:100000},
    1001:{acno:1001,username:"Ammu",password:123,balance:200000},
    1002:{acno:1002,username:"Anu",password:123,balance:300000},
    1003:{acno:1003,username:"Arya",password:123,balance:400000},
    1004:{acno:1004,username:"Vishnu",password:123,balance:500000},
    1005:{acno:1005,username:"Minnu",password:123,balance:600000},
  }

  constructor() { }

  ngOnInit(): void {
  }
  login(){
    var acnum=this.acno 
    var psw=this.pswrd
    let userDetails=this.userDetails
    if(acnum in userDetails){
      if(psw==userDetails[acnum]['password']){
        alert('login success')
      }else{
        alert('incorrect password')
      }

    }
   else{
    alert('user not exist or incorrect ac number')
   }
  } 
  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
    }
    pswdChange(event:any){
   this.pswrd=event.target.value
   console.log(this.pswrd);
   
   
    }


}

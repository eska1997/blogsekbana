import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.scss']
})
export class AddblogComponent implements OnInit {
  alertBox : boolean = false;
  userStatus: any;
  alertMessage ='';
  userData = {
    title : '',
    description : '',
    uid : ''
  }

  constructor(public firebaseService : FirebaseService, public router:Router) { }

  ngOnInit(): void {
    this.userStatus = localStorage.getItem('user');
  }
  
  addBlog(){
    this.userStatus = localStorage.getItem('user');
    if(this.userStatus !== 'guest') {
      this.firebaseService.addBlog(this.userData).then(res =>{
        // console.log(res)
        this.alertBox = true;
        this.alertMessage = 'Blog added successfully. Cheers!!!'
      })
    } else {
      this.alertBox = true;
      this.alertMessage = 'Please login to add blogs'
    }
  }
  closeAlertBox(){
    this.alertBox =false;
    
  }
  back(){
    this.router.navigate(['/'])
  }
}

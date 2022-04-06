import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommondatasharingService } from 'src/app/services/commondatasharing.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blog = {
    title : '',
    comment : ''
  }
  blogNumber : any;
  blogs:any = [];
  userStatus: any;
  userData : any;
  alertBox : boolean = false;
  alertMessage = '';
  comments: any = [];

  constructor( public commonDataSharingService : CommondatasharingService, public router : Router, 
    public firebaseService : FirebaseService) { }

  ngOnInit(): void {
    this.blogNumber = localStorage.getItem('blogNumber')
    console.log(this.blogNumber)
    this.userStatus = localStorage.getItem('user');
    this.commonDataSharingService.blogs.subscribe(datas => {
    datas.forEach((doc: any) => {
      this.blogs.push(doc.data())
    })
    this.blog.title = this.blogs[this.blogNumber].title;
    this.firebaseService.getComments(this.blog.title).subscribe(datas => {
      datas.docs.forEach((doc: any) => {
         this.comments.push(doc.data().comment)
      })
    })
    });


  }
  back(){
    this.router.navigate([''])
  }
  comment(){
    this.userStatus = localStorage.getItem('user');
    this.blog.title = this.blogs[this.blogNumber].title;
    if(this.userStatus !== 'guest') {
      this.firebaseService.addComment(this.blog).then(res =>{
        console.log(res)
        this.alertBox = true;
        this.alertMessage = 'Comment added successfully.';
        this.comments.push(this.blog.comment)
      })
    } else {
      this.alertBox = true;
      this.alertMessage = 'Please login to comment'
    }
  }
  closeAlertBox(){
    this.alertBox =false;
    
  }
}

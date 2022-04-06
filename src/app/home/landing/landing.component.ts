import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommondatasharingService } from 'src/app/services/commondatasharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})


export class LandingComponent implements OnInit {
  sortValue: any;
  blogs:any = [];
  user = {
    displayName : '',
    photoUrl : '',
  };

  constructor(public authService: AuthService, public commonDataSharingService : CommondatasharingService,
    public router: Router ) { }

  ngOnInit(): void {
    this.commonDataSharingService.blogs.subscribe(datas => {
    datas.forEach((doc: any) => {
      this.blogs.push(doc.data())
    })
    });
  }

  routeToAddBlog(){
    this.router.navigate(['/addblog'])
  }
  sort(){
   // console.log('clicked')
    if(this.sortValue == 'a-z'){
      this.blogs.sort((a:any,b:any) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    } else if(this.sortValue == 'z-a'){
      this.blogs.sort((a:any,b:any) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)).reverse();
    }
  }
  viewBlog(val : any){
    localStorage.setItem('blogNumber',val)
    this.router.navigate(['/blog'])
  }
}

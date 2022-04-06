import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user = {
    displayName : '',
    photoUrl : '',
  };
  userStatus: any;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.userStatus = localStorage.getItem('user');
  }
  login(){
    this.authService.GoogleLogin().then((res:any) => {
      this.user.displayName = res.user.displayName;
      this.user.photoUrl = res.user.photoURL;
      localStorage.setItem("user", res.user.displayName);
      this.setUSer();
    })
  }
  logout(){
    localStorage.setItem('user','guest');
    this.setUSer();
  }
  setUSer() {
    this.userStatus = localStorage.getItem('user');
  }
}

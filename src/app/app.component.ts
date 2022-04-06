import { Component } from '@angular/core';
import { CommondatasharingService } from './services/commondatasharing.service';
import { FirebaseService } from './services/firebase.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogsite';
  constructor(public dataSharing: CommondatasharingService, public firebaseService: FirebaseService){
    localStorage.setItem('user','guest');
    this.firebaseService.getBlogs();
  }
}

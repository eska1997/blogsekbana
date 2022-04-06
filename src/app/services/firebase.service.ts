import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import 'firebase/database';
import { CommondatasharingService } from './commondatasharing.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
blogs: any;
  constructor( public afDB: AngularFirestore, public dataSharing: CommondatasharingService) { }

  addBlog(userData : any) {
    return this.afDB.collection('blogs').doc(userData.title).set(userData);
  }
  getBlogs(){
    this.afDB.collection('blogs').get().subscribe(datas => {
      // console.log(datas)
      this.dataSharing.emitBlogs(datas.docs);
    })
  }
  addComment(blog : any){
    console.log(blog)
    return this.afDB.collection(`${blog.title}`).add({comment:blog.comment});
  }
  getComments(title : any){
   return this.afDB.collection(`${title}`).get();
  }
  }
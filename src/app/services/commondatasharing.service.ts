import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommondatasharingService {
  authStatus : any;
  public blogs = new BehaviorSubject<any>([]);
  constructor() { }
  
  emitAuthStatus(){
  }
  emitBlogs(val: any){
    // console.log(val)
    this.blogs.next(val);
  }
}

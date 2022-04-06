import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AddblogComponent } from './addblog/addblog.component';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    AddblogComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }

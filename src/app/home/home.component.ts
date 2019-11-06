import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {HttpService} from '../http.service';
import { User } from '../Models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("username", { static: true }) 
  username: ElementRef;

  @ViewChild("password", { static: true }) 
  password: ElementRef;

  displayLogin: boolean = true;
  displayHome: boolean = false;
  displayRegister: boolean = false;

  print() {
    console.log(this.username.nativeElement.value+this.password.nativeElement.value)
  }

  user: User = { username: "Muster", password: "1234" };
  public singUp() {
    this.httpService.createUser(this.user).subscribe();
  }

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

}

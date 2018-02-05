import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../../core/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  template: `
    <p (click)="c($event)">
      main works! a is: {{ data.a }}
    </p>
    <div>{{ user | json }}</div>
    <div>Observable: {{ user$ | async | json }}</div>
    <app-edit [details]="data" (increase)="inc($event)" (foo)="f()"></app-edit>
    <button (click)="newUser()">New user</button>
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data = {a: 10, b: 'BBB'};
  user: User;
  user$: Observable<User>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.user$ = this.userService.getUserObs();
  }

newUser() {
 this.userService.nextUser();
}
  inc(e) {
    console.log(e)
    const a = this.data.a + 1
    this.data = {...this.data, a};
  }

  c(e) {
    console.log('click', e)
  }
  f() {
    console.log("ssd");
  }

}

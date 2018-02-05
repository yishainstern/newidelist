import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

export interface User {
  name: string;
  phone?: string;
}

@Injectable()
export class UserService {
  user$ = new BehaviorSubject(null);

  constructor(
    // private http: HttpClient
  ) { }
  // :User
  getUser() {
    return {name: 'doors!'};
  }

  nextUser() {
  setTimeout( () => this.user$.next({name: Math.random() + ''}), 1000);
  }
  getUserObs() {
    return this.user$;
    // return this.http.get(...)
  }
}

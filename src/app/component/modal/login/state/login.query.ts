import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { LoginState, LoginStore } from './login.store';

@Injectable({ providedIn: 'root' })
export class LoginQuery extends Query<LoginState> {
  constructor(protected store: LoginStore) {
    super(store);
  }
}

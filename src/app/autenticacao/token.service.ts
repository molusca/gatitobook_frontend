import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _key: string = environment.KEY;

  constructor() { }

  retornaToken() {
    return localStorage.getItem(this._key) ?? '';
  }

  salvaToken(token: string) {
    localStorage.setItem(this._key, token);
  }

  removeToken() {
    localStorage.removeItem(this._key);
  }

  possuiToken() {
    return !!this.retornaToken();
  }
}

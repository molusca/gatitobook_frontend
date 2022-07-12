import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private _url = environment.apiUrl + '/user';

  constructor(private httpClient: HttpClient) { }

  autenticar(usuario: string, senha: string): Observable<any> {
    return this.httpClient.post(`${this._url}/login`, {
      userName: usuario,
      password: senha
    });
  }
}

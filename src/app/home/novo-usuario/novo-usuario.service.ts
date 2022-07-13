import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NovoUsuario } from './novo-usuario.type';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  private _url = environment.apiUrl + '/user';

  constructor(private httpClient: HttpClient) { }

  cadastraNovoUsuario(NovoUsuario: NovoUsuario): Observable<any> {
    return this.httpClient.post(`${this._url}/signup`, NovoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string): Observable<any> {
    return this.httpClient.get(`${this._url}/exists/${nomeUsuario}`);
  }
}

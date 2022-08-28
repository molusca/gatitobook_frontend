import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';
import { Animais, Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  private _url = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);

    return this.http.get<Animais>(`${this._url}/${nomeDoUsuario}/photos`, { headers });
  }

  buscaAnimalPorId(id: number):  Observable<Animal> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);

    return this.http.get<Animal>(`${this._url}/photos/${id}`, { headers });
  }

}

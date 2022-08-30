import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, mapTo, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';
import { Animais, Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  private _url = environment.apiUrl;
  private _NOT_MODIFIED = '304';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    return this.http.get<Animais>(`${this._url}/${nomeDoUsuario}/photos`);
  }

  buscaAnimalPorId(id: number):  Observable<Animal> {
    return this.http.get<Animal>(`${this._url}/photos/${id}`);
  }

  excluiAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${this._url}/photos/${id}`);
  }

  curtir(id: number): Observable<boolean> {
    return this.http.post(`${this._url}/photos/${id}/like`,
    {},
    { observe: 'response' }
    ).pipe(
      mapTo(true),
      catchError((err) => {
        return err.status === this._NOT_MODIFIED ? of(false) : throwError(() => err);
      })
    )
  }

}

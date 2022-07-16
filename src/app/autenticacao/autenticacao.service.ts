import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private _url = environment.apiUrl + '/user';

  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(`${this._url}/login`,
      {
        userName: usuario,
        password: senha
      },
      {
        observe: 'response'
      }
    ).pipe(
        tap(response => {
          const authToken = response.headers.get('x-access-token') ?? '';
          this.usuarioService.salvaToken(authToken);
        }
      )
    );
  }
}

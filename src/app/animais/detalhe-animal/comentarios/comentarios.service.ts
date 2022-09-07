import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentario, Comentarios } from './comentarios';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  private _url = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  buscaComentarios(id: number): Observable<Comentarios> {
    return this.httpClient.get<Comentarios>(`${this._url}/photos/${id}/comments`);
  }

  incluiComentario(id: number, commentText: string): Observable<Comentario> {
    return this.httpClient.post<Comentario>(`${this._url}/photos/${id}/comments`, { commentText });
  }

}

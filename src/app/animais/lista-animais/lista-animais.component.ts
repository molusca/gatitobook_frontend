import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { AnimaisService } from '../animais.service';
import { Animais } from '../animal';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaAnimaisComponent implements OnInit {

  public animais$!: Observable<Animais>;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService,
  ) { }

  ngOnInit(): void {
    this.animais$ = this.usuarioService.retornaUsuario()
    .pipe(
      switchMap((usuario) => {
        const username = usuario.name ?? '';
        return this.animaisService.listaDoUsuario(username);
      })
    )
  }

}

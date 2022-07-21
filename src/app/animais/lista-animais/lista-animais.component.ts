import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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

  public animais!: Animais;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService,
  ) { }

  ngOnInit(): void {
    this.usuarioService.retornaUsuario().subscribe(usuario => {
      const username = usuario.name;

      if (!username) return;

      this.animaisService.listaDoUsuario(username).subscribe(animais => {
        this.animais = animais;
      });
    });
  }

}

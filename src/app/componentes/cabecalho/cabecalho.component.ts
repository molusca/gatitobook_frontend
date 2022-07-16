import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CabecalhoComponent {

  public usuario$ = this.usuarioService.retornaUsuario();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  public logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}

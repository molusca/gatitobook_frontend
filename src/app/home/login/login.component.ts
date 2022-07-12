import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario: string = '';
  public senha: string = '';

  constructor(
    private autenticacao: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    if (!this.usuario || !this.senha) {
      alert('Preencha os campos corretamente');
      return;
    }

    this.autenticacao.autenticar(this.usuario, this.senha).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/animais']);
      },
      error: (err) => {
        alert('USuario ou senha incorretos');
        console.error(err);
      },
      complete: () => {
      }
    });

  }
}

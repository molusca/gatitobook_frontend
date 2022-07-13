import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario.type';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguais } from './usuario-senha-iguais.validator';
@Component({
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioJaExisteService: UsuarioExisteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', Validators.required],
        userName: ['', [minusculoValidator], [this.usuarioJaExisteService.usuarioJaExiste()]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validators: [usuarioSenhaIguais]
      }
    );
  }

  cadastraNovoUsuario(): void {
    const novoUsuario = this.form.getRawValue() as NovoUsuario;

    if (!this.form.valid) {
      return alert('Preencha os campos corretamente');
    }

    this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['']);
      },
      error: (err) => {
        console.log(err);
        alert('Erro ao cadastrar usuario');
      },
      complete: () => {}
    });
  }
}

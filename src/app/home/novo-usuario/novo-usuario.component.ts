import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario.type';
@Component({
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  cadastraNovoUsuario(): void {
    const novoUsuario = this.form.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
    // if (!this.form.valid) {
    //   alert('Preencha os campos corretamente');
    //   return;
    // }

    // const novoUsuario = this.form.value;
    // this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //     alert('Usuario cadastrado com sucesso');
    //   }
    // });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
import { Comentarios } from './comentarios';
import { ComentariosService } from './comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  @Input() id!: number;
  comentarios$!: Observable<Comentarios>;
  comentarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private comentariosService: ComentariosService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.comentarios$ = this.comentariosService.buscaComentarios(this.id);
  }

  buildForm(): void {
    this.comentarioForm = this.formBuilder.group({
      comentario: [{ value: '', disabled: false }, [Validators.maxLength(300)]]
    });
  }

  onSubmit(): void {
    const comentario = this.comentarioForm.get('comentario')?.value as string;
    this.comentarios$ = this.comentariosService
    .incluiComentario(this.id, comentario)
    .pipe(
      switchMap(() => this.comentariosService.buscaComentarios(this.id)),
      tap(() => {
        this.comentarioForm.reset();
        alert('Comentário incluído com sucesso!');
      })
    );
  }
}

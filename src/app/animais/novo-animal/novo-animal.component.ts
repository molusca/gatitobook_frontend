import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.scss'],
})
export class NovoAnimalComponent implements OnInit {
  formAnimal!: FormGroup;
  file!: File;
  preview!: string;
  percentualConcluido: number = 0;

  constructor(
    private animaisService: AnimaisService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formAnimal = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      file: [{ value: '', disabled: false }, [Validators.required]],
      description: [{ value: '', disabled: false }, [Validators.maxLength(300)]],
      allowComments: [{ value: true, disabled: false }],
    });
  }

  gravaArquivo(arquivo: any): void {
    const [file] = arquivo?.files as File[];
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }

  onUpload() {
    const allowComments = this.formAnimal.get('allowComments')?.value ?? false;
    const description = this.formAnimal.get('description')?.value ?? '';

    this.animaisService
      .upload(description, allowComments, this.file)
      .pipe(finalize(() => this.router.navigate(['animais'])))
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            const total = event.total ?? 1;
            this.percentualConcluido = Math.round(100 * (event.loaded / total));
          }
        },
        (err: any) => console.log(err)
      );
  }
}

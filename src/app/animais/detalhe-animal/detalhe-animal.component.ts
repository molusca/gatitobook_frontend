import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AnimaisService } from '../animais.service';
import { Animal } from '../animal';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.scss']
})
export class DetalheAnimalComponent implements OnInit {

  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animaisService: AnimaisService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params['id'];
    this.buscaAnimal(this.animalId);
  }

  buscaAnimal(id: number) {
    this.animal$ = this.animaisService.buscaAnimalPorId(id);
  }

  curtir() {
    this.animaisService.curtir(this.animalId).subscribe({
      next: (curtida) => {
        if(curtida) {
          this.animal$ = this.animaisService.buscaAnimalPorId(this.animalId);
        }
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  excluir() {
    this.animaisService.excluiAnimal(this.animalId).subscribe({
      next: (res) => {
        this.router.navigate(['/animais/'])
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

}

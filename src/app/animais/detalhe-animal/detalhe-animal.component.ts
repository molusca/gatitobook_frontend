import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params['id'];
    this.buscaAnimal(this.animalId);
  }

  buscaAnimal(id: number) {
    this.animal$ = this.animaisService.buscaAnimalPorId(id);
  }

}

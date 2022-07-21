import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Animais } from '../animal';

@Component({
  selector: 'app-grade-fotos-animais',
  templateUrl: './grade-fotos-animais.component.html',
  styleUrls: ['./grade-fotos-animais.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GradeFotosAnimaisComponent implements OnInit {

  @Input() animais!: Animais;

  constructor() { }

  ngOnInit(): void {
  }

}

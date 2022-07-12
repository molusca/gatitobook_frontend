import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaAnimaisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

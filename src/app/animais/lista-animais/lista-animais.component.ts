import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animais } from '../animal';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaAnimaisComponent implements OnInit {

  public animais!: Animais;

  constructor(
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.animais = this.activateRoute.snapshot.data['animais'];
    });
  }

}

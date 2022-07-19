import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartaoComponent implements OnInit {

  @Input() public titulo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

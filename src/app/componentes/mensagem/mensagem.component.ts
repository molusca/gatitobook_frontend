import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MensagemComponent implements OnInit {

  @Input() public mensagem: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalComponent implements OnInit {

  private _apiUrl: string = environment.apiUrl;
  public urlOriginal: string = '';

  @Input() public descricao: string = '';

  @Input() set url(url: string) {
    if(url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${this._apiUrl}/imgs/${url}`;
    }
  }

  get url(): string {
    return this.urlOriginal;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

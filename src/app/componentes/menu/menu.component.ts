import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuAtivo = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.menuAtivo = !this.menuAtivo;
  }

}

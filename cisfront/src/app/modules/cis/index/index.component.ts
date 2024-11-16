import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  titulo: string;
  comenzar: string;
  copy: string;
  version: string;

  constructor(
    private router: Router,
  ) {
    this.titulo = 'CIS';
    this.comenzar = 'Comenzar';
    this.copy = '@2024 Central Inventory System, todos los derechos reservados';
    this.version = 'Versión 1.0.0.241111';
   }

   login() {
    this.router.navigate(['/cis/login'])
   }
}

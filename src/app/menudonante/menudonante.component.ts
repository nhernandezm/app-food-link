import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menudonante',
  standalone: true,
  imports: [],
  templateUrl: './menudonante.component.html',
  styleUrl: './menudonante.component.css'
})
export class MenudonanteComponent {

  constructor(private router: Router) {}

  guardar() {
    this.router.navigate(['/donate']);
  }

  cancelar() {
    this.router.navigate(['/hacer-donante']);
  }
    
  volver() {
    window.history.back(); // Retorna a la página anterior
  }
}

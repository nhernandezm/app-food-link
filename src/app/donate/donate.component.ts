import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {
  pedidoForm = {
    producto:"",
    kilos:0,
    nombreQuienDona:""
  };

  constructor(private http: HttpClient) {

  }

  enviarPedido() {
    if(this.pedidoForm.kilos <= 0 && this.pedidoForm.nombreQuienDona == "" && this.pedidoForm.producto == ""){
      alert('Debe completar el formulario');
      return;
    }

    this.http.post(environment.apiPath +'/donaciones', this.pedidoForm).subscribe({
      next: () => {
        alert('Donación registrada.');
      },
      error: err => {
        console.error(err);
        alert('Error al guardar');
      }
    });
  }

  volver() {
    window.history.back(); // Retorna a la página anterior
  }
}

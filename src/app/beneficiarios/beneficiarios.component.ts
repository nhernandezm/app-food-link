import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

export interface donacion {
  id:number,
  producto: string;
  kilos: number;
  quienPide: string;
  quienPideList: string[];
  quienDona: string;
  nombreQuienRecibe:string;
  fechaDonacion:Date;
  entregado:boolean;
  entregadoTexto:string;
  fechaEntrega:Date;
}

@Component({
  selector: 'app-beneficiarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beneficiarios.component.html',
  styleUrl: './beneficiarios.component.css'
})
export class BeneficiariosComponent {
  listDonaciones:donacion[] = [];

    constructor(private http: HttpClient) {
  
    }

    ngOnInit(): void {
      this.obtenerDonaciones();
    }

  obtenerDonaciones() {
    this.http.get<donacion[]>(environment.apiPath + '/donaciones').subscribe({
      next: (data) => {
        this.listDonaciones = data.map(j => ({
          ...j,
          entregadoTexto : j.entregado ? "Si" : "No",
          quienPideList : j.quienPide ? j.quienPide.split(">") : []
        }));
      },
      error: err => {
        console.error(err);
        alert('Error al guardar');
      }
    });
  }

  pedir(idDonacion:number,nombreQuienPide:string) {

    this.http.post(environment.apiPath +'/donaciones/pedir',{
      idDonacion:idDonacion, nombreQuienPide:nombreQuienPide
    }).subscribe({
      next: (data) => {
        alert("Guardado correctamente.");
        this.obtenerDonaciones();
      },
      error: err => {
        console.error(err);
        alert('Error al guardar');
      }
    });
  }

  pedirDonacion(idDonacion:number){
    let quienPide = prompt("Ingrese nombre de quien pide.");
    if(quienPide){
      this.pedir(idDonacion,quienPide);
    }
  }

  volver() {
    window.history.back(); // Retorna a la página anterior
  }
}

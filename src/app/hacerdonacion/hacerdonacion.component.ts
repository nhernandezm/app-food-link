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
  selector: 'app-hacerdonacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hacerdonacion.component.html',
  styleUrl: './hacerdonacion.component.css'
})
export class HacerdonacionComponent {
  listDonaciones:donacion[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.obtenerDonaciones();
  }

  obtenerDonaciones() {
      this.http.get<donacion[]>(environment.apiPath +'/donaciones').subscribe({
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

    hacerDonacion(id:number,nombre:string){
      this.http.post(environment.apiPath +'/donaciones/entregardonacion',{
        idDonacion:id,nombreQuienRecibe:nombre
      }).subscribe({
        next: (data) => {
          alert("Registro actualizado");
          this.obtenerDonaciones();
        },
        error: err => {
          console.error(err);
          alert('Error al guardar');
        }
      });
    }

    hacerEntrega(id:number){
      this.http.post(environment.apiPath +'/donaciones/entregado',{
        idDonacion:id
      }).subscribe({
        next: (data) => {
          alert("Registro actualizado");
          this.obtenerDonaciones();
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

import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButtons, IonBackButton, IonButton, IonSegment, IonSegmentButton, IonLabel, IonToggle, IonItem, IonTextarea } from '@ionic/angular/standalone';
import { PerrosService } from '../../services/perros.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: 'nuevo.page.html',
  styleUrls: ['nuevo.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButtons, IonBackButton, IonButton, IonSegment, IonSegmentButton, IonLabel, FormsModule, IonToggle, IonItem, IonTextarea],
})
export class NuevoPage {
  private perrosService = inject(PerrosService);
  private router = inject(Router);

  nuevoPerro: any = {
    id: 0,
    foto: '',
    nombre: '',
    tipo: 'Perro',
    raza: '',
    edad: '',
    sexo: 'Macho',
    tamano: 'Pequeño',
    vacunado: false,
    descripcion: '',
    adoptado: false
  };

  guardar() {
    this.perrosService.agregar(this.nuevoPerro);
    this.router.navigate(['/']);
  }
}

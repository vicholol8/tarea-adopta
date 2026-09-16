import { Component, inject, signal, computed } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonSegment, IonSegmentButton, IonLabel, IonGrid, IonRow, IonCol, IonButton, IonButtons } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { PerrosService } from '../../services/perros.service';
import { FormsModule } from '@angular/forms';
import { TarjetaPerroComponent } from '../../components/tarjeta-perro/tarjeta-perro.component';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: 'galeria.page.html',
  styleUrls: ['galeria.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonSegment, IonSegmentButton, IonLabel, IonGrid, IonRow, IonCol, RouterLink, TarjetaPerroComponent, FormsModule, IonButton, IonButtons],
})
export class GaleriaPage {
  private perrosService = inject(PerrosService);
  auth = inject(Auth);
  private router = inject(Router);
  filtro = signal('todos');

  perrosFil = computed(() => {
    const lista = this.perrosService.todas();
    const estado = this.filtro();

    if (estado == 'disponibles') return lista.filter(p => !p.adoptado);
    if (estado == 'adoptados') return lista.filter(p => p.adoptado);
    return lista;
  });

  cerrarSesion() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}

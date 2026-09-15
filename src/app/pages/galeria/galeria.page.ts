import { Component, inject, signal, computed } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonSegment, IonSegmentButton, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { PerrosService } from '../../services/perros.service';
import { FormsModule } from '@angular/forms';
import { TarjetaPerroComponent } from '../../components/tarjeta-perro/tarjeta-perro.component';

@Component({
  selector: 'app-galeria',
  templateUrl: 'galeria.page.html',
  styleUrls: ['galeria.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonSegment, IonSegmentButton, IonLabel, IonGrid, IonRow, IonCol, RouterLink, TarjetaPerroComponent, FormsModule],
})
export class GaleriaPage {
  private perrosService = inject(PerrosService);
  filtro = signal('todos');

  perrosFil = computed(() => {
    const lista = this.perrosService.todas();
    const estado = this.filtro();

    if (estado == 'disponibles') return lista.filter(p => !p.adoptado);
    if (estado == 'adoptados') return lista.filter(p => p.adoptado);
    return lista;
  });
}

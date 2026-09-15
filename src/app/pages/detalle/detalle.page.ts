import { Component, inject, computed } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonImg, IonChip, IonLabel, IonButton } from '@ionic/angular/standalone';
import { PerrosService } from '../../services/perros.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.page.html',
  styleUrls: ['detalle.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonImg, IonChip, IonLabel, IonButton],
})
export class DetallePage {
  private route = inject(ActivatedRoute);
  private perrosService = inject(PerrosService)

  private id = this.route.snapshot.paramMap.get('id');
  perro = computed(() => {
    return this.id ? this.perrosService.obtener(this.id) : undefined;
  });

  adoptar() {
    if (this.id) {
      this.perrosService.adoptar(this.id);
    }
  }
}

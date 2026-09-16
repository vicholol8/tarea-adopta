import { Component, inject, computed } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonImg, IonChip, IonLabel, IonButton } from '@ionic/angular/standalone';
import { PerrosService } from '../../services/perros.service';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.page.html',
  styleUrls: ['detalle.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonImg, IonChip, IonLabel, IonButton, RouterLink],
})
export class DetallePage {
  private route = inject(ActivatedRoute);
  private perrosService = inject(PerrosService)
  private router = inject(Router)

  private id = this.route.snapshot.paramMap.get('id');
  perro = computed(() => {
    return this.id ? this.perrosService.obtener(this.id) : undefined;
  });

  adoptar() {
    if (this.id) {
      this.perrosService.adoptar(this.id);
    }
  }

  confirmacion = false;

  eliminar(){
    if (this.id) {
      this.perrosService.eliminar(this.id);
      this.router.navigate(['/']);
    }
  }
}

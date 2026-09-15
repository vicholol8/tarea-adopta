import { Component, Input } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Perro } from '../../services/perros.service';

@Component({
  selector: 'app-tarjeta-perro',
  templateUrl: 'tarjeta-perro.component.html',
  styleUrls: ['tarjeta-perro.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, RouterLink],
})
export class TarjetaPerroComponent {
  @Input() perro!: Perro;
}

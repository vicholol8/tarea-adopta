import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonInput, IonButton, IonSegment, IonSegmentButton, IonLabel, IonToggle, IonItem, IonTextarea } from '@ionic/angular/standalone';
import { PerrosService } from '../../services/perros.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonInput, IonButton, IonSegment, IonSegmentButton, IonLabel, IonToggle, IonItem, IonTextarea, FormsModule]
})

export class EditarPage {
  private perrosService = inject(PerrosService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private id = this.route.snapshot.paramMap.get('id');

  perroEditar: any = this.id ? {... this.perrosService.obtener(this.id)} : {};

  guardarCambios(){
    this.perrosService.editar(this.perroEditar);
    this.router.navigate(['/']);
  }
}
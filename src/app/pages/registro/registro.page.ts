import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonInput, IonButton } from '@ionic/angular/standalone';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, FormsModule, IonButtons, IonBackButton, IonInput, IonButton]
})
export class RegistroPage {
  private auth = inject(Auth);
  private router = inject(Router);

  correo = '';
  clave = '';
  error = '';

  registrar(){
    if (!this.correo || !this.clave) {
      this.error = "Llena todos los campos";
      return;
    }

    const exito = this.auth.registrar(this.correo, this.clave);

    if (exito) {
      this.router.navigate(['/login']);
    } else {
      this.error = "Ya ha sido registrado este correo";
    }
  }
}

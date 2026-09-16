import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/angular/standalone';
import { Auth } from '../../services/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, FormsModule, IonInput, IonButton, RouterLink]
})
export class LoginPage {
  private auth = inject(Auth);
  private router = inject(Router);

  correo = '';
  clave = '';
  error = '';

  ingresar() {
    if (!this.correo || !this.clave) {
      this.error = "Ingresa correo y contraseña";
      return;
    }

    const valido = this.auth.login(this.correo, this.clave);

    if (valido) {
      this.error = '';
      this.router.navigate(['/']);
    } else {
      this.error = "correo o contraseña incorrectos"
    }
  }
}

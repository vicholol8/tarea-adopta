import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private usuarios: any[] = [];
  usuarioActual = signal<string | null>(null);

  registrar(correo: string, clave: string): boolean {
    const existe = this.usuarios.find(u => u.correo === correo);
    if (existe) {
      return false;
    }
    this.usuarios.push({ correo, clave });
    return true;
  }

  login(correo: string, clave: string): boolean {
    const valido = this.usuarios.find(u => u.correo === correo && u.clave === clave);
    if (valido) {
      this.usuarioActual.set(correo);
      return true;
    }
    return false;
  }

  logout() {
    this.usuarioActual.set(null);
  }
}

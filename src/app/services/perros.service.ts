import { Injectable, signal } from '@angular/core';

export interface Perro {
  id: number;
  nombre: string;
  tipo: string; // 'Perro' | 'Gato' | 'Otro'
  raza: string;
  edad: string;
  sexo: string;
  tamano: string;
  vacunada: boolean;
  descripcion: string;
  foto: string; // URL de la imagen
  adoptado: boolean;
}

@Injectable({ providedIn: 'root' })
export class PerrosService {
  private perros = signal<Perro[]>([
    {
      id: 1, nombre: 'Rocky', tipo: 'Perro', raza: 'Labrador', edad: '2 años',
      sexo: 'Macho', tamano: 'Grande', vacunada: true,
      descripcion: 'Juguetón y muy sociable. Le encanta correr en el parque y jugar a la pelota.',
      foto: 'https://placedog.net/600/600?id=1', adoptado: false,
    },
    {
      id: 2, nombre: 'Luna', tipo: 'Perro', raza: 'Beagle', edad: '4 años',
      sexo: 'Hembra', tamano: 'Mediano', vacunada: true,
      descripcion: 'Tranquila y cariñosa. Ideal para departamento; disfruta de las siestas al sol.',
      foto: 'https://placedog.net/600/600?id=2', adoptado: true,
    },
    {
      id: 3, nombre: 'Toby', tipo: 'Perro', raza: 'Poodle', edad: '1 año',
      sexo: 'Macho', tamano: 'Pequeño', vacunada: false,
      descripcion: 'Cachorro lleno de energía. Aprende trucos rapidísimo y adora la compañía.',
      foto: 'https://placedog.net/600/600?id=3', adoptado: false,
    },
    {
      id: 4, nombre: 'Maya', tipo: 'Perro', raza: 'Husky', edad: '3 años',
      sexo: 'Hembra', tamano: 'Grande', vacunada: true,
      descripcion: 'Atlética y leal. Necesita ejercicio diario y disfruta de largas caminatas por la montaña.',
      foto: 'https://placedog.net/600/600?id=4', adoptado: true,
    },
    {
      id: 5, nombre: 'Coco', tipo: 'Perro', raza: 'Retriever', edad: '2 años',
      sexo: 'Macho', tamano: 'Grande', vacunada: true,
      descripcion: 'Noble y paciente, excelente con niños. Un compañero fiel para toda la familia.',
      foto: 'https://placedog.net/600/600?id=5', adoptado: false,
    },
    {
      id: 6, nombre: 'Nina', tipo: 'Perro', raza: 'Salchicha', edad: '5 años',
      sexo: 'Hembra', tamano: 'Pequeño', vacunada: true,
      descripcion: 'Curiosa y regalona. Le gusta acurrucarse y seguirte por toda la casa.',
      foto: 'https://placedog.net/600/600?id=6', adoptado: false,
    },
  ]);

  todas(): Perro[] {
    return this.perros();
  }

  obtener(id: String): Perro | undefined {
    return this.perros().find(p => p.id === Number(id));
  }

  agregar(perro: Perro): void {
    const idAlto = Math.max(...this.perros().map(p => p.id));
    perro.id = idAlto +1
    this.perros.update(listac => [...listac, perro]);
  }

  adoptar(id: String) {
    this.perros.update(lista => lista.map(perro => perro.id == Number(id) ? { ...perro, adoptado: true} : perro));
  }

  editar(perro: Perro) {
    this.perros.update(lista => lista.map(p => p.id === perro.id ? perro : p));
  }

  eliminar(id: String) {
    this.perros.update(lista => lista.filter(p => p.id !== Number(id)));
  }
}

// 1. IMPORTACIONES: Traemos las herramientas de Angular
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageItemComponent } from '../image-item/image-item';
import { Image } from '../../interfaces/image.interface';

@Component({
  selector: 'app-gallery',
  standalone: true,
    // 2. CONEXIÓN: Importamos el componente hijo para poder usarlo en el HTML
  imports: [CommonModule, ImageItemComponent],
  templateUrl: './gallery.html'
})
export class GalleryComponent {
  // 3. EL CORAZÓN (SIGNAL): Creamos una señal reactiva
  // En lugar de una variable común, usamos signal(). 
  // Si el contenido de este "saquito" cambia, Angular actualiza la pantalla al instante.
  images = signal<Image[]>([
    { id: '1', src: 'https://picsum.photos/id/237/300/200', alt: 'Perrete' },
    { id: '2', src: 'https://picsum.photos/id/238/300/200', alt: 'Ciudad' },
    { id: '3', src: 'https://picsum.photos/id/239/300/200', alt: 'Diente de león' }
  ]);
    
}
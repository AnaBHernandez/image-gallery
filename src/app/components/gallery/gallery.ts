import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from '../../interfaces/image.interface';
import { ImageItemComponent } from '../image-item/image-item'; // <--- Ruta corregida

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ImageItemComponent],
  template: `
    <div class="container mx-auto p-4 max-w-6xl">
      <header class="text-center mb-10">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-2">Galería de Imágenes</h1>
        <p class="text-gray-600 italic">Unidad 2: Signals & Control Flow</p>
      </header>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
        @for (img of images(); track img.id; let first = $first) {
          <app-image-item 
            [image]="img" 
            [isFeatured]="first">
          </app-image-item>
        } @empty {
          <div class="col-span-full p-20 text-center bg-gray-100 rounded-xl">
             <p class="text-xl text-gray-400 font-medium">Buscando imágenes...</p>
          </div>
        }
      </div>
    </div>
  `
})
export class GalleryComponent {
  images = signal<Image[]>([
    { id: '10', src: 'https://picsum.photos/id/10/800/600', alt: 'Montañas' },
    { id: '20', src: 'https://picsum.photos/id/20/800/600', alt: 'Escritorio' },
    { id: '30', src: 'https://picsum.photos/id/30/800/600', alt: 'Café' },
    { id: '40', src: 'https://picsum.photos/id/40/800/600', alt: 'Bosque' },
    { id: '50', src: 'https://picsum.photos/id/50/800/600', alt: 'Coche' },
    { id: '60', src: 'https://picsum.photos/id/60/800/600', alt: 'Laptop' }
  ]);
}
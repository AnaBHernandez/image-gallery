import { Component, input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Image } from '../../interfaces/image.interface';

@Component({
  selector: 'app-image-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="relative overflow-hidden rounded-lg transition-all duration-300 shadow-md border-2 border-transparent"
         [class.featured]="isFeatured()">
      <img [ngSrc]="image().src" 
           [alt]="image().alt"
           fill
           priority
           class="object-cover transition-transform hover:scale-105">
    </div>
  `,
  styles: [`
    :host {
      display: block;
      aspect-ratio: 1 / 1;
    }
    .featured {
      @apply border-blue-500 scale-105 z-10 shadow-2xl;
      aspect-ratio: 16 / 9;
    }
  `]
})
export class ImageItemComponent {
  // Uso de Signal input() requerido por la Unidad 2
  image = input.required<Image>();
  // Input para destacar la primera imagen
  isFeatured = input<boolean>(false);
}
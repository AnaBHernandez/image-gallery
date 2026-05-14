import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageItemComponent } from '../image-item/image-item';
import { Image } from '../../interfaces/image.interface';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ImageItemComponent],
  templateUrl: './gallery.html'
})
export class GalleryComponent {
  // IDs corregidos a string para cumplir el contrato de la interfaz
  images = signal<Image[]>([
    { id: '1', src: 'https://picsum.photos/id/237/300/200', alt: 'Perrete' },
    { id: '2', src: 'https://picsum.photos/id/238/300/200', alt: 'Ciudad' },
    { id: '3', src: 'https://picsum.photos/id/239/300/200', alt: 'Diente de león' }
  ]);
}
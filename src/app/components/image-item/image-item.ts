import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from '../../interfaces/image.interface';

@Component({
  selector: 'app-image-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-item.html'
})
export class ImageItemComponent {
  // Contrato estricto: El padre debe pasar obligatoriamente un objeto tipo Image
  imageData = input.required<Image>();
}
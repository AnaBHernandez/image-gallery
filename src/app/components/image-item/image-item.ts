import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common'; // [Unidad 2] Herramienta para optimización de imágenes
import { Image } from '../../interfaces/image.interface';

@Component({
  selector: 'app-image-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage], // [Unidad 2] Importamos la directiva optimizada
  templateUrl: './image-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush // [Unidad 1] Modo Zoneless nativo eficiente
})
export class ImageItemComponent {
  
  // [Unidad 2] Entrada obligatoria desde el Padre (Signal de lectura)
  imageData = input.required<Image>();

  // [Unidad 3] Canal de salida para notificar eventos al Padre (Output)
  deleteImage = output<string>();

  // [Unidad 3] Manejador del clic del usuario
  onDeleteClick(event: MouseEvent): void {
    event.stopPropagation(); // [Unidad 3] Detiene la propagación del evento (burbujeo)
    this.deleteImage.emit(this.imageData().id); // [Unidad 3] Emite el ID al componente Padre
  }
}
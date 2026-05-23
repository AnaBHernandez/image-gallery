import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // [Unidad 3] Herramientas para formularios reactivos
import { ImageItemComponent } from '../image-item/image-item';
import { Image } from '../../interfaces/image.interface';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ImageItemComponent, ReactiveFormsModule], // [Unidad 3] Añadimos el módulo de formularios
  templateUrl: './gallery.html',
  changeDetection: ChangeDetectionStrategy.OnPush // [Unidad 1] Modo Zoneless nativo eficiente
})
export class GalleryComponent {
  
  // [Unidad 2] Estado global de la galería administrado mediante una Signal
  images = signal<Image[]>([
    { id: '1', src: 'https://picsum.photos/id/237/300/200', alt: 'Perrete' },
    { id: '2', src: 'https://picsum.photos/id/238/300/200', alt: 'Ciudad' },
    { id: '3', src: 'https://picsum.photos/id/239/300/200', alt: 'Diente de león' }
  ]);

  // [Unidad 3] Definición del formulario reactivo con validaciones estrictas
  imageForm = new FormGroup({
    src: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    alt: new FormControl('', { validators: [Validators.required], nonNullable: true })
  });

  // [Unidad 3] Método para añadir una nueva imagen desde el formulario
  addImage(): void {
    if (this.imageForm.valid) {
      const formValue = this.imageForm.value; // Sintaxis corregida en singular

      const newImage: Image = {
        id: crypto.randomUUID(), // Genera un ID único e irrepetible
        src: formValue.src || 'https://picsum.photos/300/200',
        alt: formValue.alt || 'Nueva Imagen'
      };

      // [Unidad 3] Mutación inmutable añadiendo el nuevo elemento al inicio de la Signal
      this.images.update(currentImages => [newImage, ...currentImages]);
      
      // Reinicia el formulario para dejar los campos limpios
      this.imageForm.reset();
    }
  }

  // [Unidad 3] Manejador de eventos para eliminar una imagen del estado
  removeImage(id: string): void {
    const confirmado = window.confirm("¿Estás segura de que quieres eliminar esta imagen?");
    
    if (confirmado) {
      // [Unidad 3] Mutación inmutable del array filtrando el ID correspondiente
      this.images.update(currentImages => currentImages.filter(img => img.id !== id));
    }
  }
}
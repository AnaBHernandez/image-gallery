import { Component } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery'; // Enlace al componente Padre

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GalleryComponent], // Importamos la galería
  template: `
    <main class="min-h-screen bg-slate-100 py-8">
      <app-gallery></app-gallery>
    </main>
  `
})
export class AppComponent {}
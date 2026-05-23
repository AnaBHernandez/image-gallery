import { Component } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery'; 

@Component({
  selector: 'app-root',// 3. ESTO conecta con <app-root> en index.html
  standalone: true,// Significa que es independiente y moderno
  imports: [GalleryComponent],// 4. "TRAE" el componente Gallery para usarlo aquí 
  template: `
    <main class="min-h-screen bg-slate-100 py-8"><!-- Estilos de Tailwind -->
      <app-gallery></app-gallery><!-- 5. LLAMA al componente Gallery -->
    </main>
  `
})
export class AppComponent {}// Clase vacía porque solo sirve de contenedor
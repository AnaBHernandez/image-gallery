// src/app/config/api.config.ts
export const API_CONFIG = {
  // URL base de la API centralizada
  BASE_URL: 'https://api.themoviedb.org/3',
  
  // CDN de imágenes de alta resolución (Esencial para optimizar el CLS de la Unidad 2)
  IMAGE_CDN: 'https://image.tmdb.org/t/p/w500',
  
  // Cabeceras globales de la aplicación
  HEADERS: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};
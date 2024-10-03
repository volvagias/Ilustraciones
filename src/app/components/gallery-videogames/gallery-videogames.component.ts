import { Component } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery-videogames',
  templateUrl: './gallery-videogames.component.html',
  styleUrl: './gallery-videogames.component.css'
})
export class GalleryVideogamesComponent {

  galleryId = 'videojuegosGallery';

  constructor(private gallery: Gallery) {}

  items: GalleryItem[] = [
    // Videojuegos
    new ImageItem({ src: '/assets/images/videojuegos/link.jpeg', thumb: '/assets/images/videojuegos/link.jpeg' }),
    new ImageItem({ src: '/assets/images/videojuegos/niño.jpg', thumb: '/assets/images/videojuegos/niño.jpg' }),
    new ImageItem({ src: '/assets/images/videojuegos/micro-5.jpg', thumb: '/assets/images/videojuegos/micro-5.jpg' }),
    new ImageItem({ src: '/assets/images/videojuegos/micro-1.jpg', thumb: '/assets/images/videojuegos/micro-1.jpg' }),
    new ImageItem({ src: '/assets/images/videojuegos/micro-3.jpg', thumb: '/assets/images/videojuegos/micro-3.jpg' }),
    new ImageItem({ src: '/assets/images/videojuegos/micro-4.jpg', thumb: '/assets/images/videojuegos/micro-4.jpg' })
  ];

  ngOnInit(): void {
    // Cargar los elementos de la galería
    const galleryRef = this.gallery.ref(this.galleryId); // Le paso una referencia para que no me abra imagenes de otra galería.
    galleryRef.load(this.items);
  }

}

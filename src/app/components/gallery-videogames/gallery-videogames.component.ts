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
  ];

  ngOnInit(): void {
    // Cargar los elementos de la galería
    const galleryRef = this.gallery.ref(this.galleryId); // Le paso una referencia para que no me abra imagenes de otra galería.
    galleryRef.load(this.items);
  }

}

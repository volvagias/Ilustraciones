import { Component } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent {

  galleryId = 'albumesGallery';

  constructor(private gallery: Gallery) {}

  items: GalleryItem[] = [
    // Albumes
    new ImageItem({ src: '/assets/images/albumes/cronicas.png', thumb: '/assets/images/albumes/cronicas.png' }),
    new ImageItem({ src: '/assets/images/albumes/maldita-libertad-sin-logo.png', thumb: '/assets/images/albumes/maldita-libertad-sin-logo.png' }),
    new ImageItem({ src: '/assets/images/albumes/lullabies-sin-logo.png', thumb: '/assets/images/albumes/lullabies-sin-logo.png' }),
    new ImageItem({ src: '/assets/images/albumes/final-fire.png', thumb: '/assets/images/albumes/final-fire.png' }),
    new ImageItem({ src: '/assets/images/albumes/magitek.png', thumb: '/assets/images/albumes/magitek.png' })
  ];

  ngOnInit(): void {
    // Cargar los elementos de la galería
    const galleryRef = this.gallery.ref(this.galleryId); // Le paso una referencia para que no me abra imagenes de otra galería.
    galleryRef.load(this.items);
  }

}

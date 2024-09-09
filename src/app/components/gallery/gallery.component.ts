import { Component } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  constructor(private gallery: Gallery) {}

  items: GalleryItem[] = [
    new ImageItem({ src: '/assets/images/cronicas.png', thumb: '/assets/images/cronicas.png' }),
    new ImageItem({ src: '/assets/images/maldita-libertad-sin-logo.png', thumb: '/assets/images/maldita-libertad-sin-logo.png' }),
    new ImageItem({ src: '/assets/images/lullabies-sin-logo.png', thumb: '/assets/images/lullabies-sin-logo.png' }),
    new ImageItem({ src: '/assets/images/final-fire.png', thumb: '/assets/images/final-fire.png' }),
    new ImageItem({ src: '/assets/images/magitek.png', thumb: '/assets/images/magitek.png' }),
  ];

  ngOnInit(): void {
    // Cargar los elementos de la galería
    const galleryRef = this.gallery.ref();
    galleryRef.load(this.items);
  }

}

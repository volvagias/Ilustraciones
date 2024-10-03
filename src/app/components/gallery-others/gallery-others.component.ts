import { Component } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery-others',
  templateUrl: './gallery-others.component.html',
  styleUrl: './gallery-others.component.css'
})
export class GalleryOthersComponent {

  galleryId = 'albumesOthers';

  constructor(private gallery: Gallery) {}

  items: GalleryItem[] = [
    // Albumes
    new ImageItem({ src: '/assets/images/otros/aqua.jpeg', thumb: '/assets/images/otros/aqua.jpeg' }),
    new ImageItem({ src: '/assets/images/otros/requiem.jpeg', thumb: '/assets/images/otros/requiem.jpeg' }),
    new ImageItem({ src: '/assets/images/otros/gotas-de-lluvia.jpeg', thumb: '/assets/images/otros/gotas-de-lluvia.jpeg' }),
    new ImageItem({ src: '/assets/images/otros/envase-emocion.jpg', thumb: '/assets/images/otros/envase-emocion.jpg' })
  ];

  ngOnInit(): void {
    // Cargar los elementos de la galería
    const galleryRef = this.gallery.ref(this.galleryId); // Le paso una referencia para que no me abra imagenes de otra galería.
    galleryRef.load(this.items);
  }

}

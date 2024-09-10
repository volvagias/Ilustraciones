import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.css'
})
export class GalleryPageComponent {

  allCheckbox: boolean = true;
  albumCheckbox: boolean = false;
  videogamesCheckbox: boolean = false;
  
  toggleCheckbox(type: string, event: any): void {
    switch(type) {
      case 'all':
        this.allCheckbox = event.checked; // Actualiza el estado actual del checkbox a checkeado.
        if (event.checked) {
          this.albumCheckbox = true; 
          this.videogamesCheckbox = true; 
        }
        break;
      case 'albumes':
        this.albumCheckbox = event.checked; // Actualiza el estado actual del checkbox a checkeado.
        if (event.checked) {
          this.allCheckbox = false; // Desmarca el checkbox de todos.
          this.videogamesCheckbox = false; // Desmarca el checkbox de videojuegos.
        }
        break;
      case 'videojuegos':
        this.videogamesCheckbox = event.checked; // Actualiza el estado actual del checkbox a checkeado.
        if (event.checked) {
          this.allCheckbox = false; // Desmarca el checkbox de todos.
          this.albumCheckbox = false; // Desmarca el checkbox de albumes.
        }
        break;
    }
  }
  
}

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
  othersCheckbox: boolean = false;
  
  toggleCheckbox(type: string, event: any): void {
    switch(type) {
      case 'all':
        this.allCheckbox = event.checked; // Actualiza el estado actual del checkbox a checkeado.
        if (event.checked) {
          this.albumCheckbox = true; 
          this.videogamesCheckbox = true; 
          this.othersCheckbox = true;
        }
        break;
      case 'albumes':
        this.albumCheckbox = event.checked; // Actualiza el estado actual del checkbox a checkeado.
        if (event.checked) {
          this.allCheckbox = false; // Desmarca el checkbox de todos.
          this.videogamesCheckbox = false; // Desmarca el checkbox de videojuegos.
          this.othersCheckbox = false;
        }
        break;
      case 'videojuegos':
        this.videogamesCheckbox = event.checked; // Actualiza el estado actual del checkbox a checkeado.
        if (event.checked) {
          this.allCheckbox = false; 
          this.albumCheckbox = false; 
          this.othersCheckbox = false;
        }
        break;
      case 'otros':
        this.othersCheckbox = event.checked; // Actualiza el estado actual del checkbox a checkeado.
        if (event.checked) {
          this.allCheckbox = false; 
          this.videogamesCheckbox = false;
          this.albumCheckbox = false; 
        }
        break;
    }
  }
  
}

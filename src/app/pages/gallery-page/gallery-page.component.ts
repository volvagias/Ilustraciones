import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.css'
})
export class GalleryPageComponent {

  allCheckbox: boolean = true;
  albumCheckbox: boolean = false;
  
  toggleCheckbox(type: string, event: any): void {
    switch(type) {
      case 'all':
        this.allCheckbox = event.checked;
        if (event.checked) {
          this.albumCheckbox = false; // Desmarca el checkbox de álbumes
        }
        break;
      case 'albumes':
        this.albumCheckbox = event.checked;
        if (event.checked) {
          this.allCheckbox = false; // Desmarca el checkbox de todos
        }
        break;
    }
  }
  
}

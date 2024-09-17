import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-top-info',
  templateUrl: './top-info.component.html',
  styleUrl: './top-info.component.css'
})
export class TopInfoComponent {

  constructor(private clipboard: Clipboard) {}

  linkCopy() {
    const copy = 'coverartstudioleonel@gmail.com';
  
    this.clipboard.copy(copy);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Copiado al portapapeles.",
      showConfirmButton: false,
      timer: 1400,
      customClass: {
        popup: 'custom-popup'
      }
    });
  }

}

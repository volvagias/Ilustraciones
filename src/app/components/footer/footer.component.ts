import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  copyMessage: boolean = false;

  constructor(private clipboard: Clipboard) {}

  linkCopy() {
    const copy = 'coverartstudioleonel@gmail.com';
    this.clipboard.copy(copy);

    this.copyMessage = true;
    setTimeout(() => {
      this.copyMessage = false;
    }, 4000); // Oculta el mensaje después de 4 segundos.
  }

}

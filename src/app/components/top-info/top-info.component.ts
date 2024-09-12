import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-top-info',
  templateUrl: './top-info.component.html',
  styleUrl: './top-info.component.css'
})
export class TopInfoComponent {

  constructor(private clipboard: Clipboard) {}

  linkCopy() {
    const copy = 'bruzzeseyasociados@gmail.com';
  
    this.clipboard.copy(copy);
  }

}

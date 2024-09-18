import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TopInfoComponent } from './components/top-info/top-info.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatIconModule } from '@angular/material/icon';

import { GalleryComponent } from './components/gallery/gallery.component';
import { LightboxModule } from 'ng-gallery/lightbox';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { GalleryVideogamesComponent } from './components/gallery-videogames/gallery-videogames.component';
import { GalleryOthersComponent } from './components/gallery-others/gallery-others.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactComponent } from './components/contact/contact.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TopInfoComponent,
    GalleryComponent,
    GalleryPageComponent,
    GalleryVideogamesComponent,
    GalleryOthersComponent,
    FooterComponent,
    CarouselComponent,
    ContactComponent,
    ContactPageComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCheckboxModule,
    LightboxModule,
    ClipboardModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

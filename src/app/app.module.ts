import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TopInfoComponent } from './components/top-info/top-info.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LightboxModule } from 'ng-gallery/lightbox';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { GalleryVideogamesComponent } from './components/gallery-videogames/gallery-videogames.component';
import { GalleryOthersComponent } from './components/gallery-others/gallery-others.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TopInfoComponent,
    NavbarComponent,
    GalleryComponent,
    GalleryPageComponent,
    GalleryVideogamesComponent,
    GalleryOthersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCheckboxModule,
    LightboxModule,
    ClipboardModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

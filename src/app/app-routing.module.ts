import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [{
  path: 'home', 
  component: HomeComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'gallery', component: GalleryPageComponent },
{ path: 'contact', component: ContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryVideogamesComponent } from './gallery-videogames.component';

describe('GalleryVideogamesComponent', () => {
  let component: GalleryVideogamesComponent;
  let fixture: ComponentFixture<GalleryVideogamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryVideogamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryVideogamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

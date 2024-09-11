import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryOthersComponent } from './gallery-others.component';

describe('GalleryOthersComponent', () => {
  let component: GalleryOthersComponent;
  let fixture: ComponentFixture<GalleryOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryOthersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

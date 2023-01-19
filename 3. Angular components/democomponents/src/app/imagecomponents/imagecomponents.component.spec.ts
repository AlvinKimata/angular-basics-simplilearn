import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecomponentsComponent } from './imagecomponents.component';

describe('ImagecomponentsComponent', () => {
  let component: ImagecomponentsComponent;
  let fixture: ComponentFixture<ImagecomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagecomponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagecomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

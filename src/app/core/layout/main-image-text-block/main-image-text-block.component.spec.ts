import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImageTextBlockComponent } from './main-image-text-block.component';

describe('MainImageTextBlockComponent', () => {
  let component: MainImageTextBlockComponent;
  let fixture: ComponentFixture<MainImageTextBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MainImageTextBlockComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(MainImageTextBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

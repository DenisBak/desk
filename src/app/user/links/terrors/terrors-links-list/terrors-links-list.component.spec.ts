import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrorsLinksListComponent } from './terrors-links-list.component';

describe('TerrorsLinksListComponent', () => {
  let component: TerrorsLinksListComponent;
  let fixture: ComponentFixture<TerrorsLinksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [TerrorsLinksListComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(TerrorsLinksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
